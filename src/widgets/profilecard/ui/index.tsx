import Image from 'next/image';

import { cn } from '@/shared/utils';

interface ProfileCardProps {
  imageSrc: string;
  projectName: string;
  teamName: string;
  date: string;
  requestStatus: string;
}

const ProfileCard = () => {
  return (
    <div
      className={cn(
        `flex h-26 w-295 justify-between gap-10 rounded-xl border border-[#2F2F2F] bg-[#22222280] p-6`,
      )}
    >
      <div className={cn('flex gap-4')}>
        <Image
          src="/images/profilecard/profile-image.png"
          alt="프로필 이미지"
          width={56}
          height={56}
          className={cn('h-14 w-14 rounded-full')}
        />

        <div className={cn(`flex flex-col gap-2`)}>
          <div className={cn(`flex h-6 items-center text-[1.25rem] font-semibold text-white`)}>
            프로젝트 이름
          </div>
          <div className={cn('flex h-4 items-center text-[0.875rem] font-medium text-[#9A9A9A]')}>
            소속동아리/팀명
          </div>
        </div>
      </div>
      <div className={cn('flex items-center gap-4')}>
        <div className={cn(`flex text-[0.875rem] text-[#9A9A9A]`)}>2026-01-02</div>
        <div className={cn(`text-[1.25rem] font-semibold`)}>
          <span className={cn(`text-[#FFF]`)}>요청 상태: </span>
          <span className={cn(`text-[#888]`)}>확인중</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
