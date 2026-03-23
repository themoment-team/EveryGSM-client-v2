'use client';

import { ProjectCard, ProjectDetailModal, ProjectType } from '@/entities/project';
import { LikeButton } from '@/features/like-project';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

interface ProjectListProps {
  projects: ProjectType[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const { openModal } = useModalStore();

  return (
    <div className={cn('mx-auto flex w-full max-w-295 flex-wrap gap-x-5 gap-y-4')}>
      {projects.map((project) => (
        <ProjectCard
          key={project.projectId}
          data={project}
          likeButton={<LikeButton isLiked={project.liked} projectId={project.projectId} />}
          onDetailClick={() =>
            openModal(
              <ProjectDetailModal
                data={project}
                modalLikeButton={
                  <LikeButton isLiked={project.liked} projectId={project.projectId} />
                }
              />,
            )
          }
        />
      ))}
    </div>
  );
};

export default ProjectList;
