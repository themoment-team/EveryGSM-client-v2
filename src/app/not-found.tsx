import Link from 'next/link';

import { ArrowIcon } from '@/shared/assets';
import { cn } from '@/shared/utils';

const NotFound = () => {
  return (
    <div
      className={cn(
        'flex h-[calc(100vh-72px)] flex-col items-center justify-center gap-6 bg-[#191919]',
      )}
    >
      <h1 className={cn('text-[8rem] font-bold text-[#FC335A]')}>404</h1>
      <p className={cn('text-[2.25rem] font-bold text-[#FFFFFF]')}>잘못된 경로입니다</p>
      <p className={cn('text-[1rem] font-medium text-[#FFFFFF]')}>
        존재하지 않는 주소를 입력하셨거나, <br />
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className={cn('flex items-center gap-4 text-[1rem] font-medium text-[#FFFFFF]')}
      >
        메인페이지로 <ArrowIcon />
      </Link>
    </div>
  );
};

export default NotFound;
