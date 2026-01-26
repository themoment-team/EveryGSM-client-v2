import { ProjectCard, projectMockList } from '@/entities/project';
import { LikeButton } from '@/features/like-project';
import { cn } from '@/shared/utils';

const HomePage = () => {
  return (
    <div className={cn('flex min-h-[calc(100vh-72px)] gap-x-5 gap-y-4 bg-[#191919] p-4')}>
      {projectMockList.map((project) => (
        <ProjectCard
          key={project.id}
          data={project}
          likeButton={<LikeButton isLiked={project.isLiked} projectId={project.id} />}
          modalLikeButton={<LikeButton isLiked={project.isLiked} projectId={project.id} />}
        />
      ))}
    </div>
  );
};

export default HomePage;
