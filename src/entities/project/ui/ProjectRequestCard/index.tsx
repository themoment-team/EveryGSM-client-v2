import Image from 'next/image';

import { cn } from '@/shared/utils';

import type { ProjectRequest } from '../../model/types';

interface ProjectRequestCardProps {
  data: ProjectRequest;
}

export const ProjectRequestCard = ({ data }: ProjectRequestCardProps) => {
  const { imageSrc, projectName, teamName, date, requestStatus } = data;

  return (
    <div
      className={cn(
        'flex h-26 w-295 justify-between rounded-xl border border-[#2F2F2F] bg-[rgba(34,34,34,0.5)] p-6',
      )}
    >
      <div className={cn('flex gap-4')}>
        <Image
          src={imageSrc}
          alt="프로필 이미지"
          width={56}
          height={56}
          className={cn('h-14 w-14 rounded-full')}
        />

        <div className={cn('flex flex-col justify-center gap-2')}>
          <div
            className={cn('flex h-6 items-center text-[1.25rem]/[1.5rem] font-semibold text-white')}
          >
            {projectName}
          </div>
          <div
            className={cn(
              'flex h-4 items-center text-[0.875rem]/[1rem] font-medium text-[#9A9A9A]',
            )}
          >
            {teamName}
          </div>
        </div>
      </div>
      <div className={cn('flex items-center gap-4')}>
        <div className={cn('flex text-[0.875rem]/[1rem] text-[#9A9A9A]')}>{date}</div>
        <div className={cn('text-[1.25rem]/[1.5rem] font-semibold')}>
          <span className={cn('text-[#FFF]')}>요청 상태: </span>
          <span className={cn(requestStatus === '거절' ? 'text-[#FF7C7C]' : 'text-[#888]')}>
            {requestStatus}
          </span>
        </div>
      </div>
    </div>
  );
};
