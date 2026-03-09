'use client';

import { GetMyResponseType } from '@/entities/project';
import { cn } from '@/shared/utils';
import { ProjectList } from '@/widgets/project-list';
import { RequestedProjects } from '@/widgets/requestedProject';

import { useGetMy } from '../model';

interface MyPageProps {
  initialMyData?: GetMyResponseType;
}

const MyPage = ({ initialMyData }: MyPageProps) => {
  const { data } = useGetMy(initialMyData);
  return (
    <div
      className={cn(
        'flex min-h-[calc(100vh-72px)] flex-col items-center gap-y-16 bg-[#191919] p-4 text-[2.25rem] font-bold text-white',
      )}
    >
      <div className={cn('flex w-295 flex-col gap-y-10')}>
        <div>
          <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 좋아요한 프로젝트
        </div>
        <ProjectList initialProjectsData={data?.liked ? { projects: data.liked } : undefined} />
      </div>

      <div className={cn('flex w-295 flex-col gap-y-10')}>
        <div>
          <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 등록하신 프로젝트
        </div>
        <ProjectList
          initialProjectsData={data?.registered ? { projects: data.registered } : undefined}
        />
      </div>

      <RequestedProjects />
    </div>
  );
};

export default MyPage;
