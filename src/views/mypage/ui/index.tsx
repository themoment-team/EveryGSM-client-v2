import { cn } from '@/shared/utils';
import { LikeProjects } from '@/widgets/mypage';

const MyPage = () => {
  return (
    <div
      className={cn('flex min-h-[calc(100vh-72px)] flex-col items-center gap-y-4 bg-[#191919] p-4')}
    >
      <LikeProjects />
    </div>
  );
};

export default MyPage;
