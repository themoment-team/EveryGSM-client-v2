import { cn } from '@/shared/utils';

const RequestedProjects = () => {
  return (
    <div className={cn('flex w-295 flex-col gap-10')}>
      <div className={cn('flex justify-between')}>
        <div>
          <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 등록 요청한 프로젝트
        </div>
        <div className={cn('flex gap-6')}>
          <div
            className={cn(
              'flex items-center rounded-[62.5rem] bg-[#333333] px-4 py-2 text-base font-medium',
            )}
          >
            요청상태:&nbsp;<span className={cn('text-[#FF7C7C]')}>거절</span>
          </div>
          <div
            className={cn(
              'flex items-center rounded-[62.5rem] bg-[#333333] px-4 py-2 text-base font-medium',
            )}
          >
            요청상태:&nbsp;<span>확인 중</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestedProjects;
