import { ProjectRequestCard, projectRequestMockList } from '@/entities/project';
import { cn } from '@/shared/utils';

const MyPage = () => {
  return (
    <div className={cn('flex min-h-[calc(100vh-72px)] flex-col gap-y-4 bg-[#191919] p-4')}>
      {projectRequestMockList.map((request) => (
        <ProjectRequestCard key={request.id} data={request} />
      ))}
    </div>
  );
};

export default MyPage;
