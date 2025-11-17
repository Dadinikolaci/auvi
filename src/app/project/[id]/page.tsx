"use client";
export const dynamic = 'force-dynamic';

import Header from '@/components/video-player/Header';
import AnnotationToolbar from '@/components/video-player/AnnotationToolbar';
import CommentsPanel from '@/components/video-player/CommentsPanel';
import Player from '@/components/video-player/Player';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', params.id)
        .single();

      if (data) {
        setProject(data);
      } else {
        // Fallback to mock data if no project is found in Supabase
        setProject({
          id: params.id,
          name: 'Project Alpha',
          videoTitle: 'Video_Final_V2.mp4',
          status: 'In Review',
          videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        });
      }
    };

    fetchProject();
  }, [params.id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark text-[#E0E0E0]">
      <Header projectName={project.name} videoTitle={project.videoTitle} status={project.status} />
      <div className="flex flex-1 overflow-hidden">
        <AnnotationToolbar />
        <main className="flex flex-1 flex-col items-center justify-center p-8 bg-black">
          <Player videoUrl={project.videoUrl} />
        </main>
        <CommentsPanel projectId={project.id} />
      </div>
    </div>
  );
}
