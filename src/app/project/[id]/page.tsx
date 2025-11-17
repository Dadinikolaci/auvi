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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', params.id)
        .single();

      if (error) {
        setError("Could not fetch project data.");
        console.error(error);
      } else if (data) {
        setProject(data);
      }
      setLoading(false);
    };

    fetchProject();
  }, [params.id]);

  if (loading) {
    return <div className="flex h-screen w-full items-center justify-center bg-background-dark text-white">Loading project...</div>;
  }

  if (error || !project) {
    return <div className="flex h-screen w-full items-center justify-center bg-background-dark text-white">{error || "Project not found."}</div>;
  }

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark text-[#E0E0E0]">
      <Header projectName={project.name} videoTitle={project.video_title} status={project.status} />
      <div className="flex flex-1 overflow-hidden">
        <AnnotationToolbar />
        <main className="flex flex-1 flex-col items-center justify-center p-8 bg-black">
          <Player videoUrl={project.video_url} projectId={project.id} />
        </main>
        <CommentsPanel projectId={project.id} />
      </div>
    </div>
  );
}
