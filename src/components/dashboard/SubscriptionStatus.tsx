import React from 'react';
import { Button } from '@/components/ui/button';

const SubscriptionStatus = () => {
  return (
    <div className="rounded-xl p-6 bg-[#191928] border border-white/10">
      <p className="text-white text-lg font-bold leading-tight tracking-tight">Subscription Status</p>
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Current plan</span>
          <span className="text-white font-medium text-sm bg-primary/20 text-primary py-1 px-2 rounded-md">Pro Plan</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Next billing</span>
          <span className="text-white font-medium text-sm">Dec 24, 2024</span>
        </div>
        <Button variant="outline" className="w-full mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-lg h-9 px-4 bg-white/10 text-white text-sm font-medium leading-normal hover:bg-white/20 transition-colors duration-200">
          <span className="truncate">Manage Subscription</span>
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionStatus;
