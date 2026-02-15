import { cn } from '@/shared/utils';

const RequestedProjects = () => {
  return (
    <div className={cn('flex w-[73.75rem] flex-col gap-[2.5rem]')}>
      <div>
        <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 등록 요청한 프로젝트
      </div>
    </div>
  );
};

export default RequestedProjects;
