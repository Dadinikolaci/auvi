"use client";

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import * as tus from 'tus-js-client';

interface UploadableFile {
  file: File;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

const UploadArea = () => {
  const [files, setFiles] = useState<UploadableFile[]>([]);
  const router = useRouter();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const newFiles: UploadableFile[] = acceptedFiles.map(file => ({ file, progress: 0, status: 'uploading' }));
    setFiles(prev => [...prev, ...newFiles]);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      // Handle case where user is not logged in
      return;
    }

    for (const newFile of newFiles) {
      const filePath = `${session.user.id}/${Date.now()}_${newFile.file.name}`;
      const upload = new tus.Upload(newFile.file, {
        endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/upload/resumable`,
        retryDelays: [0, 3000, 5000, 10000, 20000],
        headers: {
          authorization: `Bearer ${session.access_token}`,
          'x-upsert': 'true',
        },
        uploadDataDuringCreation: true,
        metadata: {
          bucketName: 'media',
          objectName: filePath,
          contentType: newFile.file.type,
        },
        chunkSize: 6 * 1024 * 1024,
        onError: (error) => {
          setFiles(prev => prev.map(f => f.file === newFile.file ? { ...f, status: 'error', error: error.message } : f));
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          const progress = Math.round((bytesUploaded / bytesTotal) * 100);
          setFiles(prev => prev.map(f => f.file === newFile.file ? { ...f, progress } : f));
        },
        onSuccess: async () => {
          const { data: urlData } = supabase.storage.from('media').getPublicUrl(filePath);
          await supabase.from('projects').insert({
            user_id: session.user.id,
            name: newFile.file.name,
            video_title: newFile.file.name,
            video_url: urlData.publicUrl,
            status: 'In Review',
          });
          setFiles(prev => prev.map(f => f.file === newFile.file ? { ...f, status: 'success' } : f));
        },
      });
      upload.start();
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'video/*': ['.mp4', '.mov', '.webm'], 'audio/*': ['.mp3', '.wav'], 'image/*': ['.jpg', '.png'] } });

  return (
    <div className="flex flex-col gap-6 mt-4">
      <div {...getRootProps()} className={`flex flex-col items-center gap-6 rounded-lg border-2 border-dashed px-6 py-14 transition-colors ${isDragActive ? 'border-primary bg-primary/10' : 'border-primary/50 hover:border-primary hover:bg-primary/10'}`}>
        <input {...getInputProps()} />
        <span className="material-symbols-outlined text-primary text-5xl">cloud_upload</span>
        <p className="text-white text-lg font-bold">Drag & drop files here, or click to select files</p>
      </div>

      {files.length > 0 && (
        <div className="flex flex-col gap-4 mt-4">
          {files.map((f, i) => (
            <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${f.status === 'error' ? 'border-red-500' : 'border-white/10'}`}>
              <div className="flex-1">
                <p className="text-white truncate">{f.file.name}</p>
                {f.status === 'uploading' && (
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${f.progress}%` }}></div>
                  </div>
                )}
                {f.status === 'error' && <p className="text-red-500 text-sm mt-1">{f.error}</p>}
                {f.status === 'success' && <p className="text-green-500 text-sm mt-1">Upload complete!</p>}
              </div>
            </div>
          ))}
          <Button onClick={() => router.push('/dashboard')} className="mt-4">Go to Dashboard</Button>
        </div>
      )}
    </div>
  );
};

export default UploadArea;
