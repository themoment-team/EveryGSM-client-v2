'use client';

import { cn } from '@/shared/utils';
import { LikeProjects, RegisteredProjects, RequestedProjects } from '@/widgets/mypage';

import { useGetMy } from '../model';

const MyPage = () => {
  const { data } = useGetMy();
  return (
    <div
      className={cn(
        'flex min-h-[calc(100vh-72px)] flex-col items-center gap-y-4 bg-[#191919] p-4 text-[2.25rem] font-bold text-white',
      )}
    >
      <LikeProjects data={data} />
      <RegisteredProjects />
      <RequestedProjects />
    </div>
  );
};

export default MyPage;
