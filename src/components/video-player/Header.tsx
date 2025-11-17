"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ShareModal from '@/components/modals/ShareModal';

interface HeaderProps {
  projectName: string;
  videoTitle: string;
  status: string;
}

const Header = ({ projectName, videoTitle, status }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#242424] px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="size-5 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">{projectName} / {videoTitle}</h2>
          <span className="rounded bg-yellow-500/20 px-2.5 py-1 text-xs font-medium text-yellow-400">{status}</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-black text-sm font-bold"
          >
            <span className="truncate">Share</span>
          </Button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyXtXuhU1ToD7gdyqPozsIMpEwNrk9DsHWrWll46qE_fx7vsxmWARLjMJjOy7qvud4bifVwhLttBdSQajp2W07oQEiVUbrnpAwjPGLARoCYXtWoNo3W_t3QGegpYF4JjKpQMgkBrpAZkGf3wIGWvE8f_KmgJ9lxPCMadUi2tStHxbXU08KwGGJQbf9RIC4QSsot7X9QljQUWMgGkvng3AMuRlzKq6ZnIGjv99bxK5mkvAnukVnXWY7kcN16gO9mWIDRGx947Uj2nat')" }}></div>
        </div>
      </header>
      {isModalOpen && <ShareModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
