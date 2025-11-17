"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ShareModalProps {
  onClose: () => void;
}

const ShareModal = ({ onClose }: ShareModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl rounded-xl border border-[#333333] bg-[#1A1A1A] p-6 shadow-2xl md:p-8">
        <div className="flex items-start justify-between pb-4">
          <div className="flex flex-col">
            <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-white">Share Project</h3>
            <p className="font-display text-sm text-gray-400">Invite team members to collaborate.</p>
          </div>
          <button onClick={onClose} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-end">
          <div className="flex-grow">
            <label className="font-display pb-2 text-sm font-medium leading-normal text-gray-300" htmlFor="email-input">Invite people</label>
            <Input className="form-input font-display h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#333333] bg-[#101122] p-3 text-base font-normal leading-normal text-white placeholder:text-gray-500 focus:border-primary focus:outline-0 focus:ring-0" id="email-input" placeholder="Enter email addresses..." type="email"/>
          </div>
          <div className="relative w-full sm:w-40">
            <select className="form-select font-display h-12 w-full appearance-none rounded-lg border border-[#333333] bg-[#101122] p-3 text-base text-white focus:border-primary focus:outline-0 focus:ring-0">
              <option>Can view</option>
              <option>Can comment</option>
              <option selected>Can edit</option>
            </select>
            <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">expand_more</span>
          </div>
          <Button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 font-display text-sm font-bold leading-normal tracking-wide text-white transition-opacity hover:opacity-90">
            <span className="truncate">Send Invite</span>
          </Button>
        </div>

        <div className="my-6 border-t border-[#333333]"></div>

        <div>
          <div className="flex flex-col items-start justify-between gap-4 rounded-lg sm:flex-row sm:items-center">
            <div className="flex flex-col gap-1">
              <p className="font-display text-base font-bold leading-tight text-white">Get a shareable link</p>
              <p className="font-display text-sm font-normal leading-normal text-gray-400">Anyone with the link can view</p>
            </div>
          </div>
          <div className="relative mt-4 flex h-12 items-center rounded-lg border border-[#333333] bg-[#101122]">
            <span className="material-symbols-outlined pl-3 text-gray-400">link</span>
            <Input className="h-full w-full flex-1 bg-transparent pl-2 pr-28 font-display text-sm text-gray-300 focus:outline-none" readOnly type="text" value="https://saas.example/p/a1b2-c3d4-e5f6"/>
            <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 items-center gap-1.5 rounded-md bg-white/10 px-2.5 font-display text-xs font-medium text-white transition-colors hover:bg-white/20">
              <span className="material-symbols-outlined text-base">content_copy</span>
              Copy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
