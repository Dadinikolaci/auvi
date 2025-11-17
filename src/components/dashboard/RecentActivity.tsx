import React from 'react';

const RecentActivity = () => {
  return (
    <div className="rounded-xl p-6 bg-[#191928] border border-white/10">
      <p className="text-white text-lg font-bold leading-tight tracking-tight">Recent Activity</p>
      <div className="mt-4">
        <p className="text-gray-400 text-sm">No recent activity to display.</p>
      </div>
    </div>
  );
};

export default RecentActivity;
