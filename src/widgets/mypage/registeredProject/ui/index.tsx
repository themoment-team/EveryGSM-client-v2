import { cn } from '@/shared/utils';

const RegisteredProjects = () => {
  return (
    <div className={cn('flex w-295 flex-col gap-10')}>
      <div>
        <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 등록하신 프로젝트
      </div>
    </div>
  );
};
export default RegisteredProjects;
