import { cn } from '@/shared/utils';

const ProfileCard = () => {
  return (
    <div className={cn(`flex h-26 w-295 gap-10 border border-[#2F2F2F] bg-[#22222280] p-6`)}>
      <div className={cn('flex gap-4')}>
        <div></div>
        <div></div>
      </div>
      <div className={cn('flex gap-4')}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfileCard;
