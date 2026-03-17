'use client';

import { useState } from 'react';

import {
  MyProjectsListResponseType,
  ProjectsListResponseType,
  useGetMyPendingProjects,
  useGetMyProjects,
  useGetMyRejectedProjects,
} from '@/entities/project';
import { RequestStatusFilter, RequestStatusFilterType } from '@/features/request-status-filter';
import { cn } from '@/shared/utils';
import { HeroSection } from '@/widgets/hero-section';
import { ProjectList } from '@/widgets/project-list';
import { ProjectRequestList } from '@/widgets/project-request-list';

interface MyPageProps {
  initialMyProjectsData?: MyProjectsListResponseType;
  initialMyPendingProjectsData?: ProjectsListResponseType;
  initialMyRejectedProjectsData?: ProjectsListResponseType;
}

const MyPage = ({
  initialMyProjectsData,
  initialMyPendingProjectsData,
  initialMyRejectedProjectsData,
}: MyPageProps) => {
  const [selectedRequestStatus, setSelectedRequestStatus] =
    useState<RequestStatusFilterType>('REJECTED');

  const { data: myProjectsData } = useGetMyProjects({
    initialData: initialMyProjectsData,
  });
  const { data: myPendingProjectsData } = useGetMyPendingProjects({
    initialData: initialMyPendingProjectsData,
  });
  const { data: myRejectedProjectsData } = useGetMyRejectedProjects({
    initialData: initialMyRejectedProjectsData,
  });

  const likedProjects = myProjectsData?.data.liked ?? [];
  const registeredProjects = myProjectsData?.data.registered ?? [];
  const pendingProjects = myPendingProjectsData?.data.projects ?? [];
  const rejectedProjects = myRejectedProjectsData?.data.projects ?? [];
  const requestProjects = selectedRequestStatus === 'REJECTED' ? rejectedProjects : pendingProjects;

  return (
    <main className={cn('flex min-h-[calc(100vh-72px)] flex-col gap-y-4 bg-[#191919] p-4')}>
      <div className={cn('flex flex-col gap-y-16 pt-10 pb-40')}>
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

        <div className={cn('flex flex-col items-center gap-y-10')}>
          <div className={cn('flex w-full max-w-295 items-center justify-between')}>
            <HeroSection
              title={
                <>
                  <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 등록 요청한 프로젝트
                </>
              }
            />
            <RequestStatusFilter
              selectedStatus={selectedRequestStatus}
              onChange={setSelectedRequestStatus}
            />
          </div>
          <ProjectRequestList projects={requestProjects} />
        </div>
      </div>
    </main>
  );
};

export default MyPage;
