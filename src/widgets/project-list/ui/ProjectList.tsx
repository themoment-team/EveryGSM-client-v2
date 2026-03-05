'use client';

import {
  GetProjectsResponseType,
  ProjectCard,
  ProjectDetailModal,
  projectsMockData,
  useGetProjects,
} from '@/entities/project';
import { CreateProjectCard } from '@/features/create-project';
import { LikeButton } from '@/features/like-project';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

interface ProjectListProps {
  initialProjectsData?: GetProjectsResponseType;
  isLoggedIn: boolean;
  variant?: 'main' | 'mypage';
}

const ProjectList = ({ initialProjectsData, isLoggedIn, variant = 'main' }: ProjectListProps) => {
  const { openModal } = useModalStore();

  const { data: projectsData } = useGetProjects({ initialData: initialProjectsData });

  const projects = projectsData?.projects?.length
    ? projectsData.projects
    : projectsMockData.projects;

  return (
    <div className={cn('mx-auto flex max-w-295 flex-wrap gap-x-5 gap-y-4')}>
      {variant === 'main' && isLoggedIn && <CreateProjectCard />}

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
