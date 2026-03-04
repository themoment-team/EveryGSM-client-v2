'use client';
import Image from 'next/image';

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
      <div
        className={cn(
          'flex w-212 flex-col gap-[2.19rem] rounded-xl border border-[#2F2F2F] bg-[rgba(34,34,34,0.5)] p-6',
        )}
      >
        <div
          className={cn('text-[2.25rem] leading-[120%] font-bold tracking-[-0.045rem] text-white')}
        >
          프로젝트 등록 요청 작성 내용
        </div>
        <div>
          <p className={cn('text-xl leading-6 font-semibold')}>
            <span className={cn('text-white')}>요청 상태: </span>
            <span
              className={cn(requestStatus === 'rejected' ? 'text-[#FF7C7C]' : 'text-[#888888]')}
            >
              {requestStatus === 'rejected' ? '거절' : '확인 중'}
            </span>
          </p>
        </div>
        <div className={cn('flex w-full flex-col gap-9')}>
          <div className={cn('flex flex-col gap-3')}>
            <div
              className={cn('text-base leading-[120%] font-medium tracking-[-0.02rem] text-[#DDD]')}
            >
              프로젝트 로고
            </div>

            <Image
              src={data.logo}
              alt="프로젝트 이미지"
              width={56}
              height={56}
              className={cn('rounded-full object-cover')}
            />
          </div>
          <div className={cn('flex flex-col gap-3')}>
            <div
              className={cn(
                'text-base leading-[120%] font-medium tracking-[-0.02rem] text-[#BBBBBB]',
              )}
            >
              프로젝트 제목
            </div>
          </div>
          <div className={cn('flex flex-col gap-3')}>
            <div
              className={cn(
                'text-base leading-[120%] font-medium tracking-[-0.02rem] text-[#BBBBBB]',
              )}
            >
              소속 동아리 또는 팀명
            </div>
          </div>
          <div className={cn('flex flex-col gap-3')}>
            <div
              className={cn(
                'text-base leading-[120%] font-medium tracking-[-0.02rem] text-[#BBBBBB]',
              )}
            >
              프로젝트 설명
            </div>
          </div>
          <div className={cn('flex flex-col gap-3')}>
            <div
              className={cn(
                'text-base leading-[120%] font-medium tracking-[-0.02rem] text-[#BBBBBB]',
              )}
            >
              기술 스택
            </div>
          </div>
          <div className={cn('flex flex-col gap-3')}>
            <div
              className={cn(
                'text-base leading-[120%] font-medium tracking-[-0.02rem] text-[#DDDDDD]',
              )}
            >
              깃허브 레포지토리
            </div>
          </div>
          <div className={cn('flex flex-col gap-3')}>
            <div
              className={cn(
                'text-base leading-[120%] font-medium tracking-[-0.02rem] text-[#BBBBBB]',
              )}
            >
              프로젝트 배포 URL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRequestcontent;
