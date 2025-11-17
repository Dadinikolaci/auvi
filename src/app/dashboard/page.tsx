"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import Stats from '@/components/dashboard/Stats';
import StorageStatus from '@/components/dashboard/StorageStatus';
import SubscriptionStatus from '@/components/dashboard/SubscriptionStatus';
import RecentActivity from '@/components/dashboard/RecentActivity';
import Link from 'next/link';

export default function DashboardPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('updated_at', { ascending: false });

      if (data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <Header />
          <Stats projectsCount={projects.length} />

          <h2 className="text-white text-[22px] font-bold leading-tight tracking-tight pt-4">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Link key={project.id} href={`/project/${project.id}`} className="p-4 bg-[#191928] rounded-lg border border-white/10 hover:border-primary">
                <h3 className="font-bold text-lg">{project.name}</h3>
                <p className="text-sm text-gray-400">{project.status}</p>
              </Link>
            ))}
          </div>

          <h2 className="text-white text-[22px] font-bold leading-tight tracking-tight pt-4">Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <StorageStatus />
            </div>
            <div className="lg:col-span-2 flex flex-col gap-6">
              <SubscriptionStatus />
              {/* This could also be updated to fetch real activity data */}
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
