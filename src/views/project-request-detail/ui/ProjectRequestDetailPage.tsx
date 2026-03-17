import Link from 'next/link';

import { ArrowIcon } from '@/shared/assets';
import { cn } from '@/shared/utils';
import { myPendingProjectsMockData } from '@/views/mypage';
import { ProjectRequestDetailContent } from '@/widgets/project-request-detail';

const ProjectRequestDetailPage = () => {
  const project = myPendingProjectsMockData.data.projects[0];

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
          <ProjectRequestDetailContent project={project} />
        </div>
      </div>
    </main>
  );
};

export default ProjectRequestDetailPage;
