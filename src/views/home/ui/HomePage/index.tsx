'use client';

import { useCallback, useEffect, useState } from 'react';

import { ProjectCard, ProjectDetailModal, getProjects } from '@/entities/project';
import type { ProjectApiResponse } from '@/entities/project/model/api.types';
import { LikeButton } from '@/features/like-project';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

const HomePage = () => {
  const { openModal } = useModalStore();

  const [projects, setProjects] = useState<ProjectApiResponse[]>([]);

  const fetchProjects = useCallback(async () => {
    try {
      const res = await getProjects();
      setProjects(res.projects);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchProjects();
  }, [fetchProjects]);

  const handleLikeSuccess = useCallback((updated: ProjectApiResponse) => {
    setProjects((prev) => prev.map((p) => (p.projectId === updated.projectId ? updated : p)));
  }, []);

  const openProjectModal = useCallback(
    (projectId: number) => {
      const current = projects.find((p) => p.projectId === projectId);
      if (!current) return;

      openModal(
        <ProjectDetailModal
          data={current}
          modalLikeButton={
            <LikeButton
              isLiked={current.liked}
              projectId={current.projectId}
              onSuccess={handleLikeSuccess}
            />
          }
        />,
      );
    },
    [openModal, projects, handleLikeSuccess],
  );

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#191919]">
      <div
        className={cn(
          'mx-auto max-w-360 px-4 py-8',
          'sm:px-6',
          'lg:px-10',
          'xl:px-20',
          '2xl:px-32',
        )}
      >
        <section className="mb-12">
          <p
            className={cn(
              'mb-6 leading-tight font-bold text-white',
              'text-xl',
              'sm:text-2xl',
              'lg:text-[2.25rem]',
            )}
          >
            GSM의 프로젝트를 한 눈에, <br />
            EveryGSM에서 간편하게 확인해보세요!
          </p>

          <p
            className={cn(
              'font-normal text-[#666666]',
              'text-sm',
              'sm:text-base',
              'lg:text-[1.25rem]',
            )}
          >
            EveryGSM은 GSM의 프로젝트들을 한 곳에 모아 트래픽을 집중시키기 위한 서비스로,
            <br className="hidden sm:block" />
            사용자가 GSM의 사이트를 보다 쉽게 방문하기 위해 만들어졌습니다.
          </p>
        </section>

        <section
          className={cn(
            'grid grid-cols-1 gap-x-5 gap-y-4',
            'sm:grid-cols-2',
            'lg:grid-cols-3',
            'xl:grid-cols-4',
          )}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.projectId}
              data={project}
              likeButton={
                <LikeButton
                  isLiked={project.liked}
                  projectId={project.projectId}
                  onSuccess={handleLikeSuccess}
                />
              }
              onDetailClick={() => openProjectModal(project.projectId)}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default HomePage;
