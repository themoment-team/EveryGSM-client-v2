import { ProjectCard, projectMockList } from '@/entities/project';
import { cn } from '@/shared/utils';
import type { GetMyResponse } from '@/widgets/mypage';

const LikeProjects = ({ data }: { data?: GetMyResponse }) => {
  return (
    <div className={cn('flex w-295 flex-col gap-10')}>
      <div>
        <span className={cn('text-[#FC335A]')}>김유찬</span> 님이 좋아요한 프로젝트
      </div>
      <div className={cn('flex flex-wrap gap-5')}>
        {projectMockList.map((project) => (
          <div key={project.projectId} className={cn('w-[calc(25%-15px)]')}>
            <ProjectCard data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default LikeProjects;
