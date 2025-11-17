"use client";
export const dynamic = 'force-dynamic';

import Sidebar from '@/components/dashboard/Sidebar'; // Reusing the main sidebar
import UploadArea from '@/components/upload/UploadArea';

export default function UploadPage() {
  return (
    <div className="relative flex min-h-screen w-full bg-background-dark text-gray-200">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div className="flex min-w-72 flex-col gap-2">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Upload Files</p>
              <p className="text-gray-400 text-base font-normal leading-normal">Add video, audio, or image files to your project.</p>
            </div>
          </div>
          <UploadArea />
        </div>
      </main>
    </div>
  );
}
