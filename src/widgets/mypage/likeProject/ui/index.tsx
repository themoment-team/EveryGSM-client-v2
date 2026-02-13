import { cn } from '@/shared/utils';

const LikeProjects = () => {
  return (
    <div className={cn('text-[2.25rem] font-bold text-white')}>
      <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 좋아요한 프로젝트
    </div>
  );
};
export default LikeProjects;
