'use client';

import {
  ProjectCard,
  ProjectDetailModal,
  ProjectsListResponseType,
  ProjectType,
  useGetProjects,
} from '@/entities/project';
import { LikeButton } from '@/features/like-project';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

interface ProjectListProps {
  initialProjectsData?: ProjectsListResponseType;
}

const ProjectList = ({ initialProjectsData }: ProjectListProps) => {
  const { openModal } = useModalStore();

  const { data: projectsData } = useGetProjects({ initialData: initialProjectsData });

  const projects: ProjectType[] = projectsData?.data.projects || [];

  return (
    <div className={cn('mx-auto flex max-w-295 flex-wrap gap-x-5 gap-y-4')}>
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
