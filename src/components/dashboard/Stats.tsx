import React from 'react';

const statsData = {
  projects: 42,
  storageUsed: 75,
  storageTotal: 100,
  teamMembers: 5,
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#191928] border border-white/10 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        <p className="text-gray-300 text-sm font-medium leading-normal">Projects</p>
        <p className="text-white tracking-tight text-3xl font-bold leading-tight">{statsData.projects}</p>
      </div>
      <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#191928] border border-white/10 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        <p className="text-gray-300 text-sm font-medium leading-normal">Storage Used</p>
        <p className="text-white tracking-tight text-3xl font-bold leading-tight">{statsData.storageUsed}GB / {statsData.storageTotal}GB</p>
      </div>
      <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#191928] border border-white/10 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        <p className="text-gray-300 text-sm font-medium leading-normal">Team Members</p>
        <p className="text-white tracking-tight text-3xl font-bold leading-tight">{statsData.teamMembers}</p>
      </div>
    </div>
  );
};

export default Stats;
