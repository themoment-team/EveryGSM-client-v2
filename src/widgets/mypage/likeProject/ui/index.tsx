import { cn } from '@/shared/utils';

const LikeProjects = () => {
  return (
    <div className={cn('flex w-295 flex-col gap-10')}>
      <div>
        <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 좋아요한 프로젝트
      </div>
    </div>
  );
};
export default LikeProjects;
