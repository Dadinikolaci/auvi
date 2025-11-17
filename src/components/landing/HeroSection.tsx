import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-center py-20 md:py-32">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
            The future of collaborative feedback is here.
          </h1>
          <h2 className="text-[#9CA3AF] text-base font-normal leading-normal md:text-xl max-w-3xl mx-auto">
            Centralize review for video, audio, and photo materials. Speed up your creative process with precise, frame-level feedback for your team and clients.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-opacity-90 transition-opacity text-white text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Start for free</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
