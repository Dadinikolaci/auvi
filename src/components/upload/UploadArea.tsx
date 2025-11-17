"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Mock file data
const mockFiles = [
  { name: 'final_video_v3.mp4', size: '15.4 MB', progress: 0, status: 'uploading', type: 'video', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHANyklsogdJw75SrLbHUFDvIJPfn4pX5pXmwnQ3VfBB9qUjsXc3cskKGa2nskooa2iMVUkk1Uhrr19F_-oXA3Pqv9KKrRjxh0Tlo88ojzLwy1QW3NnD-1ko6gxDFBjod7zYL1e4DB8ApAfxxR59g-ag2FIR6G3k7PzmCvn40MT35EPz43yJdV3igApLzjvxQrS2m6c-3zc1gpCTLdo4-MTLVN1e2WF_ylNqm9jNHc3-szkqJ_ThnTQ0UIKnga1--prqxoiWYm3SoX' },
  { name: 'promo_image_main.jpg', size: '4.2 MB', progress: 100, status: 'success', type: 'image', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmjG8kDtP47wyNCbbqsHsZ9YGehSSTJHqjWN3rmhkXu7ZzBrxVSuNKrF78QV4nUnNsNOXOK51n7LkddSrC7s7UTop7eGgfrHaH0A4QpmWKjZe0p8qMdvt4fgZ8N8jpWxggSLEoMNum_Y8KCce6uMTd7Df3w0XgR3MEChl4zL1JWlqEolB9Cmq2grfJ1Xui7ZeBIsIcBrdimM47AiFOW6ROI9Lvenk08-sjwV3SwtGT-_p5EXRpomWwtTAl32twkqJbSSkrGIGCF6rc' },
  { name: 'interview_audio.wav', size: '128.9 MB', progress: 0, status: 'error', type: 'audio', thumbnail: null },
];

const UploadArea = () => {
  const [files, setFiles] = useState(mockFiles);
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    // Simulate upload progress for the first file
    const interval = setInterval(() => {
      setFiles(prevFiles => {
        const newFiles = [...prevFiles];
        if (newFiles[0].progress < 100) {
          newFiles[0].progress += 5;
        }
        return newFiles;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const totalSize = files.reduce((acc, file) => acc + parseFloat(file.size), 0);
    const uploadedSize = files.reduce((acc, file) => acc + (parseFloat(file.size) * (file.progress / 100)), 0);
    setTotalProgress(Math.round((uploadedSize / totalSize) * 100));
  }, [files]);


  const getFileIcon = (type: string) => {
    switch(type) {
      case 'video': return 'movie';
      case 'image': return 'photo_camera';
      case 'audio': return 'audio_file';
      default: return 'insert_drive_file';
    }
  }

  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className="flex flex-col p-4 bg-white/5 rounded-xl border border-white/10">
        <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-primary/50 px-6 py-14 hover:border-primary hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-primary text-5xl">cloud_upload</span>
          <div className="flex max-w-[480px] flex-col items-center gap-2">
            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center">Drag & drop files here</p>
            <p className="text-gray-400 text-sm font-normal leading-normal text-center">or click to browse</p>
          </div>
          <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">Choose Files</span>
          </Button>
        </div>
      </div>
      <p className="text-gray-400 text-sm font-normal leading-normal py-3 text-center">Supported formats: MP4, MOV, MP3, WAV, JPG, PNG</p>

      {/* Upload List & Overall Progress */}
      <div className="flex flex-col gap-6 mt-4">
        <div className="flex flex-col gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex gap-6 justify-between items-center">
            <p className="text-white text-base font-medium leading-normal">Total Progress</p>
            <p className="text-white text-sm font-bold leading-normal">{totalProgress}%</p>
          </div>
          <div className="w-full rounded-full bg-gray-700 h-2">
            <div className="h-2 rounded-full bg-primary" style={{ width: `${totalProgress}%` }}></div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {files.map((file, index) => (
            <div key={index} className={`flex items-center gap-4 p-4 rounded-xl border ${file.status === 'error' ? 'bg-error/10 border-error/50' : 'bg-white/5 border-white/10'}`}>
              <div
                className="flex-shrink-0 size-12 bg-cover bg-center rounded-lg flex items-center justify-center bg-gray-700"
                style={{ backgroundImage: file.thumbnail ? `url("${file.thumbnail}")` : 'none' }}
              >
                {!file.thumbnail && <span className="material-symbols-outlined text-gray-500">{getFileIcon(file.type)}</span>}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className={`text-sm font-medium truncate ${file.status === 'error' ? 'text-error' : 'text-white'}`}>{file.name}</p>
                    <p className={`text-xs ${file.status === 'error' ? 'text-error/80' : 'text-gray-400'}`}>{file.size} - {file.status === 'uploading' ? 'Uploading...' : file.status === 'success' ? 'Upload successful' : 'Upload failed'}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {file.status === 'uploading' && <p className="text-primary text-sm font-medium">{file.progress}%</p>}
                    {file.status === 'success' && <span className="material-symbols-outlined text-success" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
                    {file.status === 'error' && <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>}
                    {file.status === 'uploading' && <button className="text-gray-400 hover:text-white"><span className="material-symbols-outlined text-xl">close</span></button>}
                  </div>
                </div>
                {file.status === 'uploading' && (
                  <div className="w-full rounded-full bg-gray-700 h-1.5"><div className="h-1.5 rounded-full bg-primary" style={{ width: `${file.progress}%` }}></div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Done</span>
        </Button>
      </div>
    </div>
  );
};

export default UploadArea;
