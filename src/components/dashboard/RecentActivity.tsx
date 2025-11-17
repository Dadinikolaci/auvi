import React from 'react';

const activityData = [
  {
    icon: 'movie',
    title: 'Brand Video Q4',
    timestamp: 'Updated 2 hours ago',
    status: 'In Review',
    statusColor: 'yellow',
  },
  {
    icon: 'photo_camera',
    title: 'Photoshoot - Alps',
    timestamp: 'Updated yesterday',
    status: 'Approved',
    statusColor: 'green',
  },
  {
    icon: 'graphic_eq',
    title: 'Podcast Ep. 42 Audio',
    timestamp: 'Updated 3 days ago',
    status: 'Approved',
    statusColor: 'green',
  },
];

const RecentActivity = () => {
  const getStatusColorClass = (color: string) => {
    switch (color) {
      case 'yellow':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'green':
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="rounded-xl p-6 bg-[#191928] border border-white/10">
      <p className="text-white text-lg font-bold leading-tight tracking-tight">Recent Activity</p>
      <ul className="mt-4 space-y-4">
        {activityData.map((item, index) => (
          <li key={index} className="flex items-center gap-4 group cursor-pointer">
            <div className="p-3 bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary">{item.icon}</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-white text-sm">{item.title}</p>
              <p className="text-gray-400 text-xs">{item.timestamp}</p>
            </div>
            <span className={`text-xs font-semibold py-1 px-2 rounded-full ${getStatusColorClass(item.statusColor)}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
