import React from 'react';

const FeatureSection = () => {
  return (
    <section className="py-20 md:py-28" id="features">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h1 className="text-white tracking-tight text-3xl font-bold leading-tight md:text-4xl">
            Powerful features to enhance your workflow
          </h1>
          <p className="text-[#9CA3AF] text-base font-normal leading-normal">Everything you need to deliver better creative work, faster.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-0">
          <div className="flex flex-1 gap-3 rounded-xl border border-[#3b3c54] bg-[#1F2937] p-4 flex-col">
            <div className="text-primary"><span className="material-symbols-outlined">chat_bubble</span></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Precise Comments</h2>
              <p className="text-[#9CA3AF] text-sm font-normal leading-normal">Leave time-stamped comments and visual annotations directly on video and photo assets.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-xl border border-[#3b3c54] bg-[#1F2937] p-4 flex-col">
            <div className="text-primary"><span className="material-symbols-outlined">layers</span></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">File Versioning</h2>
              <p className="text-[#9CA3AF] text-sm font-normal leading-normal">Easily compare different versions of a file side-by-side to track changes.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-xl border border-[#3b3c54] bg-[#1F2937] p-4 flex-col">
            <div className="text-primary"><span className="material-symbols-outlined">integration_instructions</span></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Integrations</h2>
              <p className="text-[#9CA3AF] text-sm font-normal leading-normal">Connect with your favorite tools like Slack, Adobe Creative Cloud, and more.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-xl border border-[#3b3c54] bg-[#1F2937] p-4 flex-col">
            <div className="text-primary"><span className="material-symbols-outlined">share</span></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold leading-tight">Easy Sharing</h2>
              <p className="text-[#9CA3AF] text-sm font-normal leading-normal">Share secure links with clients for feedback, no account needed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
