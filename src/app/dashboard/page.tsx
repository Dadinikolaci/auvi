import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import Stats from '@/components/dashboard/Stats';
import StorageStatus from '@/components/dashboard/StorageStatus';
import SubscriptionStatus from '@/components/dashboard/SubscriptionStatus';
import RecentActivity from '@/components/dashboard/RecentActivity';

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <Header />
          <Stats />
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-tight pt-4">Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <StorageStatus />
            </div>
            <div className="lg:col-span-2 flex flex-col gap-6">
              <SubscriptionStatus />
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
