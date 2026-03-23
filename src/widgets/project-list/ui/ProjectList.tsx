'use client';

import Link from 'next/link';

import { ProjectCard, ProjectDetailModal, ProjectType } from '@/entities/project';
import { LikeButton } from '@/features/like-project';
import { PlusIcon } from '@/shared/assets';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

interface ProjectListProps {
  projects: ProjectType[];
  showRegisterCard?: boolean;
}

const ProjectList = ({ projects, showRegisterCard = false }: ProjectListProps) => {
  const { openModal } = useModalStore();

  return (
    <div className={cn('mx-auto flex w-full max-w-295 flex-wrap gap-x-5 gap-y-4')}>
      {showRegisterCard && (
        <Link
          href="/register"
          className={cn(
            'flex h-82.5 w-full max-w-70 flex-col items-center justify-center gap-6 rounded-xl bg-[rgba(34,34,34,0.50)] p-6 shadow-[inset_0_0_0_1px_#2F2F2F] backdrop-blur-[1.125rem]',
          )}
        >
          <p className={cn('text-xl leading-6 font-semibold tracking-[-0.0375rem] text-[#9A9A9A]')}>
            프로젝트 등록
          </p>
          <PlusIcon isLarge />
        </Link>
      )}

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
