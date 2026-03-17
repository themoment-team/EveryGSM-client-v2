import Image from 'next/image';
import Link from 'next/link';

import { ArrowIcon } from '@/shared/assets';
import { cn } from '@/shared/utils';
import { myPendingProjectsMockData } from '@/views/mypage';

const ProjectRequestDetailPage = () => {
  const status = myPendingProjectsMockData.data.projects[0].status;
  const statusLabel = status === 'PENDING' ? '확인 중' : status === 'REJECTED' ? '거절' : status;

  return (
    <main className={cn('min-h-[calc(100vh-72px)] bg-[#191919] p-4')}>
      <div className={cn('flex justify-center pt-10 pb-10')}>
        <div
          className={cn(
            'relative flex w-full max-w-276 flex-col items-center justify-center gap-y-4',
          )}
        >
          <Link
            href="/mypage"
            className={cn(
              'absolute top-9 left-0 flex items-center gap-x-3 text-base leading-[1.2rem] font-medium tracking-[-0.02rem] text-[#FFFFFF]',
            )}
          >
            <span className={cn('rotate-180')}>
              <ArrowIcon color="#DDDDDD" />
            </span>
            마이 페이지
          </Link>
          {myPendingProjectsMockData.data.projects[0].status === 'REJECTED' && (
            <div
              className={cn(
                'flex w-full max-w-212 flex-col gap-y-3 rounded-xl bg-[rgba(34,34,34,0.50)] p-6 shadow-[inset_0_0_0_1px_#2F2F2F] backdrop-blur-[1.125rem]',
              )}
            >
              <h2
                className={cn(
                  'text-4xl leading-[2.7rem] font-bold tracking-[-0.045rem] text-[#FF7C7C]',
                )}
              >
                거절 사유
              </h2>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.03rem] text-[#FFFFFF]',
                )}
              >
                {myPendingProjectsMockData.data.projects[0].reason ||
                  '거절 사유가 제공되지 않았습니다.'}
              </p>
            </div>
          )}

          <div
            className={cn(
              'flex w-full max-w-212 flex-col gap-y-9 rounded-xl bg-[rgba(34,34,34,0.50)] p-6 shadow-[inset_0_0_0_1px_#2F2F2F] backdrop-blur-[1.125rem]',
            )}
          >
            <h2
              className={cn('text-4xl leading-[2.7rem] font-bold tracking-[-0.045rem] text-white')}
            >
              프로젝트 등록 요청 작성 내용
            </h2>
            <p className={cn('text-xl leading-6 font-semibold tracking-[-0.0375rem] text-white')}>
              요청 상태:{' '}
              <span className={cn(status === 'REJECTED' ? 'text-[#FF7C7C]' : 'text-[#888888]')}>
                {statusLabel}
              </span>
            </p>
            <div className={cn('flex flex-col gap-y-3')}>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.02rem] text-[#DDDDDD]',
                )}
              >
                프로젝트 로고
              </p>
              <Image
                src={myPendingProjectsMockData.data.projects[0].logo}
                alt={`${myPendingProjectsMockData.data.projects[0].title} 로고`}
                width={56}
                height={56}
                className={cn('rounded-full object-cover')}
              />
            </div>
            <div className={cn('flex flex-col gap-y-3')}>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.02rem] text-[#888888]',
                )}
              >
                프로젝트 제목
              </p>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.03rem] text-[#FFFFFF]',
                )}
              >
                {myPendingProjectsMockData.data.projects[0].title}
              </p>
            </div>
            <div className={cn('flex flex-col gap-y-3')}>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.02rem] text-[#888888]',
                )}
              >
                소속 동아리 또는 팀명
              </p>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.03rem] text-[#FFFFFF]',
                )}
              >
                {myPendingProjectsMockData.data.projects[0].affiliation}
              </p>
            </div>
            <div className={cn('flex flex-col gap-y-3')}>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.02rem] text-[#888888]',
                )}
              >
                프로젝트 설명
              </p>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.03rem] text-[#FFFFFF]',
                )}
              >
                {myPendingProjectsMockData.data.projects[0].description}
              </p>
            </div>
            <div className={cn('flex flex-col gap-y-3')}>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.02rem] text-[#888888]',
                )}
              >
                기술 스택
              </p>
              <div className={cn('flex gap-x-3')}>
                {myPendingProjectsMockData.data.projects[0].techStack.map((stack, index) => (
                  <p
                    key={index}
                    className={cn(
                      'rounded-full bg-[#4F4F4F] px-3 py-1.5 text-base leading-[1.2rem] font-normal text-[#FFFFFF]',
                    )}
                  >
                    {stack.stackName}
                  </p>
                ))}
              </div>
            </div>
            <div className={cn('flex flex-col gap-y-3')}>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.02rem] text-[#888888]',
                )}
              >
                깃허브 레포지토리
              </p>
              <div className={cn('flex gap-x-3')}>
                {myPendingProjectsMockData.data.projects[0].repository.map((repo, index) => (
                  <Link
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className={cn(
                      'flex w-full items-center justify-between rounded-xl bg-[rgba(34,34,34,0.50)] p-4 shadow-[inset_0_0_0_1px_#2F2F2F]',
                    )}
                  >
                    <p
                      className={cn(
                        'text-base leading-[1.2rem] font-medium tracking-[-0.03rem] text-[#FFFFFF]',
                      )}
                    >
                      {repo.repoName}
                    </p>
                    <ArrowIcon />
                  </Link>
                ))}
              </div>
            </div>
            <div className={cn('flex flex-col gap-y-3')}>
              <p
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.02rem] text-[#888888]',
                )}
              >
                프로젝트 배포 URL
              </p>
              <Link
                href={myPendingProjectsMockData.data.projects[0].prodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-base leading-[1.2rem] font-medium tracking-[-0.03rem] text-[#FFFFFF]',
                )}
              >
                {myPendingProjectsMockData.data.projects[0].prodUrl}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectRequestDetailPage;
