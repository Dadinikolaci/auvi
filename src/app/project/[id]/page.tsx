import Header from '@/components/video-player/Header';
import AnnotationToolbar from '@/components/video-player/AnnotationToolbar';
import CommentsPanel from '@/components/video-player/CommentsPanel';
import Player from '@/components/video-player/Player';

// Mock data for a single project
const mockProject = {
  id: 'alpha',
  name: 'Project Alpha',
  videoTitle: 'Video_Final_V2.mp4',
  status: 'In Review',
  videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' // A sample video URL
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch project data based on params.id
  const project = mockProject;

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark text-[#E0E0E0]">
      <Header projectName={project.name} videoTitle={project.videoTitle} status={project.status} />
      <div className="flex flex-1 overflow-hidden">
        <AnnotationToolbar />
        <main className="flex flex-1 flex-col items-center justify-center p-8 bg-black">
          <Player videoUrl={project.videoUrl} />
        </main>
        <CommentsPanel />
      </div>
    </div>
  );
}
