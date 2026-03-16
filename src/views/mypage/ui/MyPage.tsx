'use client';

import { MyProjectsListResponseType, useGetMyProjects } from '@/entities/project';
import { cn } from '@/shared/utils';
import { HeroSection } from '@/widgets/hero-section';
import { ProjectList } from '@/widgets/project-list';

interface MyPageProps {
  initialMyProjectsData?: MyProjectsListResponseType;
}

const MyPage = ({ initialMyProjectsData }: MyPageProps) => {
  const { data: myProjectsData } = useGetMyProjects({ initialData: initialMyProjectsData });
  const likedProjects = myProjectsData?.data.liked ?? [];
  const registeredProjects = myProjectsData?.data.registered ?? [];

  return (
    <div className={cn('flex min-h-[calc(100vh-72px)] flex-col gap-y-4 bg-[#191919] p-4')}>
      <main className={cn('flex flex-col gap-y-16 pt-10 pb-40')}>
        <div className={cn('flex flex-col gap-y-10')}>
          <HeroSection
            title={
              <>
                <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 좋아요한 프로젝트
              </>
            }
          />
          <ProjectList projects={likedProjects} />
        </div>

        <div className={cn('flex flex-col gap-y-10')}>
          <HeroSection
            title={
              <>
                <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 등록한 프로젝트
              </>
            }
          />
          <ProjectList projects={registeredProjects} />
        </div>
      </main>
    </div>
  );
};

export default MyPage;
