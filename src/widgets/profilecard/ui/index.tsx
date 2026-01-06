import { cn } from '@/shared/utils';

const ProfileCard = () => {
  return (
    <div
      className={cn(
        `flex h-26 w-295 justify-between gap-10 rounded-xl border border-[#2F2F2F] bg-[#22222280] p-6`,
      )}
    >
      <div className={cn('flex gap-4')}>
        <div></div>
        <div className={cn(`flex flex-col gap-2`)}>
          <div className={cn(`flex h-6 items-center text-[1.25rem] font-semibold text-white`)}>
            프로젝트 이름
          </div>
          <div className={cn('flex h-4 items-center text-[0.875rem] font-medium text-[#9A9A9A]')}>
            소속동아리/팀명
          </div>
        </div>
      </div>
      <div className={cn('flex gap-4')}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfileCard;
