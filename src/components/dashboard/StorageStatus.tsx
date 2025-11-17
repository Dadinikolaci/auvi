import React from 'react';
import { Button } from '@/components/ui/button';

const StorageStatus = () => {
  const percentage = 75;
  const circumference = 2 * Math.PI * 15.9155;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="lg:col-span-3 flex flex-col justify-between rounded-xl p-6 bg-[#191928] border border-white/10">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-white text-lg font-bold leading-tight tracking-tight">Storage Status</p>
          <p className="text-gray-400 text-sm font-normal leading-normal mt-1">You have used {percentage}% of your available storage.</p>
        </div>
        <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium leading-normal transition-opacity hover:bg-opacity-90">
          <span className="truncate">Upgrade</span>
        </Button>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-gray-700"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            ></path>
            <path
              className="text-primary"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeDasharray={`${percentage}, 100`}
              strokeLinecap="round"
              strokeWidth="2.5"
            ></path>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageStatus;
