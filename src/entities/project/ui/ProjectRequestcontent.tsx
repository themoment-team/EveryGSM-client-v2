'use client';

import type { CheckRequestStatusType, ProjectType } from '@/entities/project/model/types';
import { useRequestModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

interface ProjectRequestCardProps {
  data: ProjectType;
  requestStatus: CheckRequestStatusType;
}

const ProjectRequestcontent = ({ data, requestStatus }: ProjectRequestCardProps) => {
  const { closeRequestModal } = useRequestModalStore();

  return (
    <div className={cn('flex flex-col items-center justify-center gap-4')}>
      {requestStatus === 'rejected' && (
        <div
          className={cn(
            'flex w-212 flex-col gap-3 rounded-xl border border-[#2F2F2F] bg-[rgba(34,34,34,0.5)] p-6',
          )}
        >
          <div
            className={cn(
              'text-[2.25rem] leading-[120%] font-bold tracking-[-0.045rem] text-[#FF7C7C]',
            )}
          >
            거절사유
          </div>
          <div
            className={cn(
              'text-base leading-[120%] font-medium tracking-[-0.03rem] wrap-break-word whitespace-pre-wrap text-white',
            )}
          >
            {data.reason}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectRequestcontent;
