'use client';

import { ProjectCard, ProjectDetailModal, ProjectType } from '@/entities/project';
import { LikeButton } from '@/features/like-project';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

interface ProjectListProps {
  projects: ProjectType[];
  isLoggedIn?: boolean;
}

const ProjectList = ({ projects, isLoggedIn = false }: ProjectListProps) => {
  const { openModal } = useModalStore();

  return (
    <div className={cn('mx-auto flex w-full max-w-295 flex-wrap gap-x-5 gap-y-4')}>
      {projects.map((project) => (
        <ProjectCard
          key={project.projectId}
          data={project}
          likeButton={
            <LikeButton
              isLiked={project.liked}
              projectId={project.projectId}
              isLoggedIn={isLoggedIn}
            />
          }
          onDetailClick={() =>
            openModal(
              <ProjectDetailModal
                data={project}
                modalLikeButton={
                  <LikeButton
                    isLiked={project.liked}
                    projectId={project.projectId}
                    isLoggedIn={isLoggedIn}
                  />
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
