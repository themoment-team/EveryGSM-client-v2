'use client';

import { ProjectCard, ProjectDetailModal, projectMockList } from '@/entities/project';
import { LikeButton } from '@/features/like-project';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

const HomePage = () => {
  const { openModal } = useModalStore();

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
              'mb-6 font-bold leading-tight text-white',
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
          {projectMockList.map((project) => (
            <ProjectCard
              key={project.id}
              data={project}
              likeButton={<LikeButton isLiked={project.isLiked} projectId={project.id} />}
              onDetailClick={() =>
                openModal(
                  <ProjectDetailModal
                    data={project}
                modalLikeButton={<LikeButton isLiked={project.isLiked} projectId={project.id} />}
                  />,
                )
              }
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default HomePage;
