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
        'flex w-full max-w-295 justify-between rounded-xl bg-[rgba(34,34,34,0.50)] p-6 shadow-[inset_0_0_0_1px_#2F2F2F] backdrop-blur-[1.125rem]',
      )}
    >
      <div className={cn('flex items-center gap-x-4')}>
        <Image
          src={imageSrc}
          alt="프로젝트 이미지"
          width={56}
          height={56}
          className={cn('rounded-full object-cover')}
        />
        <div className={cn('flex flex-col gap-y-2')}>
          <h3 className={cn('text-xl leading-6 font-semibold text-white')}>{projectName}</h3>
          <p className={cn('text-sm leading-4.25 text-[#9A9A9A]')}>{teamName}</p>
        </div>
      </div>
      <div className={cn('flex items-center gap-x-4')}>
        <p className={cn('text-sm leading-4.25 text-[#9A9A9A]')}>{date}</p>
        <p className={cn('text-xl leading-6 font-semibold')}>
          <span className={cn('text-white')}>요청 상태: </span>
          <span className={cn(requestStatus === '거절' ? 'text-[#FF7C7C]' : 'text-[#888888]')}>
            {requestStatus}
          </span>
        </p>
      </div>
    </div>
  );
};
