import { CheckRequestStatus } from '@/entities/project';
import { cn } from '@/shared/utils';

const RequestedProjects = () => {
  return (
    <div className={cn('flex w-295 flex-col gap-10')}>
      <div className={cn('flex justify-between')}>
        <div>
          <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 등록 요청한 프로젝트
        </div>
        <div>
          <CheckRequestStatus />
        </div>
      </div>
    </div>
  );
};

export default RequestedProjects;
