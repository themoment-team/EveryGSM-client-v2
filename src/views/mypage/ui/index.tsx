import { cn } from '@/shared/utils';
import { LikeProjects, RegisteredProjects, RequestedProjects } from '@/widgets/mypage';

const MyPage = () => {
  return (
    <div
      className={cn(
        'flex min-h-[calc(100vh-72px)] flex-col items-center gap-y-4 bg-[#191919] p-4 text-[2.25rem] font-bold text-white',
      )}
    >
      <LikeProjects />
      <RegisteredProjects />
      <RequestedProjects />
    </div>
  );
};

export default MyPage;
