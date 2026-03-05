'use client';

import React from 'react';

import {
  CheckRequestStatus,
  CheckRequestStatusType,
  projectMockList,
  ProjectRequestCard,
  ProjectRequestcontent,
} from '@/entities/project';
import { useRequestModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';
import { useGetPending, useGetRejected } from '@/widgets/requestedProject';

const RequestedProjects = () => {
  const { openRequestModal } = useRequestModalStore();

  const [status, setStatus] = React.useState<CheckRequestStatusType>('pending');

  const { data: pendingData } = useGetPending();
  const { data: rejectedData } = useGetRejected();

  const data = status === 'pending' ? pendingData : rejectedData;
  const requestProject = data?.length ? data : projectMockList;

  return (
    <div className={cn('flex w-295 flex-col gap-10')}>
      <div className={cn('flex justify-between')}>
        <div>
          <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 등록 요청한 프로젝트
        </div>
        <div>
          <CheckRequestStatus status={status} onStatusChange={setStatus} />
        </div>
      </div>

      <div className={cn('flex flex-col gap-4')}>
        {requestProject?.map((project) => (
          <ProjectRequestCard
            key={project.projectId}
            data={project}
            requestStatus={status}
            onDetailClick={() =>
              openRequestModal(<ProjectRequestcontent data={project} requestStatus={status} />)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RequestedProjects;
