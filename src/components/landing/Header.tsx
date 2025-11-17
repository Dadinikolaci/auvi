import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-4 z-50 flex items-center justify-between whitespace-nowrap border border-solid border-[#282839] bg-background-dark/80 backdrop-blur-md rounded-xl px-6 py-3">
      <div className="flex items-center gap-4">
        <div className="text-primary size-6">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">ReviewFlow</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#features">Features</a>
          <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal" href="#pricing">Pricing</a>
        </div>
        <div className="flex gap-2">
          <Link href="/auth" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#282839] hover:bg-[#3b3c54] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Login</span>
          </Link>
          <Link href="/auth" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-opacity-90 transition-opacity text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign Up</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
