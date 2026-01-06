'use client';

import { useState } from 'react';

import { ArrowIcon, PersonIcon } from '@/shared/assets';
import { cn } from '@/shared/utils';

interface UserMenuProps {
  user: {
    name: string;
    grade: number;
    class: number;
    number: number;
  };
  onLogout: () => void;
}

const UserMenu = ({ user, onLogout }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
  };

  return (
    <>
      <button
        className={cn('flex cursor-pointer items-center gap-2')}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={cn('text-base font-semibold text-[#FC335A]')}>{user.name}</span>
        <PersonIcon />
      </button>
      {isOpen && (
        <div
          className={cn(
            'absolute top-9 right-14 flex w-full max-w-60 flex-col items-end gap-2 rounded-xl border border-[#2F2F2F] bg-[rgba(34,34,34,0.5)] p-6 backdrop-blur-[18px]',
          )}
        >
          <div className={cn('flex w-full flex-col gap-2')}>
            <span className={cn('text-2xl/tight font-semibold text-white')}>{user.name}</span>
            <span className={cn('text-sm/none font-medium text-[#9A9A9A]')}>
              {user.grade}학년 {user.class}반 {user.number}번
            </span>
          </div>
          <button
            onClick={handleLogout}
            className={cn('flex cursor-pointer items-center justify-end gap-4 px-3 py-1.5')}
          >
            <span className={cn('text-base font-medium text-white')}>로그아웃</span>
            <ArrowIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default UserMenu;
