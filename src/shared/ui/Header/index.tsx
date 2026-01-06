'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Logo } from '@/shared/assets';
import { cn } from '@/shared/utils';

import Navigation from './Navigation';
import UserMenu from './UserMenu';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const role = 'client';

  const mockUser = {
    name: '홍길동',
    grade: 1,
    class: 1,
    number: 20,
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <header className={cn('sticky flex h-18 items-center justify-between bg-[#191919] px-10')}>
      <Link href="/">
        <Logo />
      </Link>
      {!isLogin ? (
        <button
          className={cn(
            'flex h-9 w-18.25 cursor-pointer items-center justify-center rounded-[1.125rem] border border-[#FC335A] text-base font-semibold text-[#FC335A]',
          )}
          onClick={() => setIsLogin(true)}
        >
          로그인
        </button>
      ) : (
        <div className={cn('flex items-center gap-14')}>
          <Navigation role={role} />
          <UserMenu user={mockUser} onLogout={handleLogout} />
        </div>
      )}
    </header>
  );
};

export default Header;
