import React from 'react';

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28" id="pricing">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h1 className="text-white tracking-tight text-3xl font-bold leading-tight md:text-4xl">
            Simple pricing for every team
          </h1>
          <p className="text-[#9CA3AF] text-base font-normal leading-normal">Choose the plan that fits your needs and get started in minutes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#3b3c54] bg-[#1F2937] p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-lg font-bold leading-tight">Free</h1>
              <p className="flex items-baseline gap-1.5 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$0</span>
                <span className="text-[#9CA3AF] text-base font-medium leading-tight">/ month</span>
              </p>
            </div>
            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#282839] hover:bg-[#3b3c54] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </button>
            <div className="flex flex-col gap-3">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> 2 Projects</div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> 5GB Storage</div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> Basic Comments</div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-primary bg-[#1F2937] p-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-lg font-bold leading-tight">Pro</h1>
                <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-full bg-primary px-3 py-1 text-center">Most Popular</p>
              </div>
              <p className="flex items-baseline gap-1.5 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$20</span>
                <span className="text-[#9CA3AF] text-base font-medium leading-tight">/ user / month</span>
              </p>
            </div>
            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-opacity-90 transition-opacity text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Choose Plan</span>
            </button>
            <div className="flex flex-col gap-3">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> Unlimited Projects</div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> 1TB Storage</div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> Advanced Annotations</div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> Version Control</div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#3b3c54] bg-[#1F2937] p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-lg font-bold leading-tight">Enterprise</h1>
              <p className="flex items-baseline gap-1.5 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Custom</span>
                <span className="text-[#9CA3AF] text-base font-medium leading-tight">Contact Us</span>
              </p>
            </div>
            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#282839] hover:bg-[#3b3c54] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Contact Sales</span>
            </button>
            <div className="flex flex-col gap-3">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> Everything in Pro</div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> Dedicated Support</div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> Custom Integrations</div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#F9FAFB] items-center"><span className="material-symbols-outlined text-primary text-base">check</span> Advanced Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
