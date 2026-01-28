'use client';

import { ProjectCard, ProjectDetailModal, projectMockList } from '@/entities/project';
import { LikeButton } from '@/features/like-project';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

const HomePage = () => {
  const { openModal } = useModalStore();

  return (
    <div className={cn('flex min-h-[calc(100vh-72px)] flex-wrap gap-x-5 gap-y-4 bg-[#191919] p-4')}>
      {/* TODO: flex-wrap, gap-x-5, gap-y-4 등등 필요없는 스타일 삭제. 현재는 테스트 목적으로 남겨둠 */}
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
    </div>
  );
};

export default HomePage;
