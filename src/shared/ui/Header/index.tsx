'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ArrowIcon, Logo, PersonIcon } from '@/shared/assets';
import { NAV_LINKS } from '@/shared/constants';
import { cn } from '@/shared/utils';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const role = 'client';
  const links = NAV_LINKS[role];

  const mockUser = {
    name: '홍길동',
    grade: 1,
    class: 1,
    number: 20,
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
          <nav className={cn('flex items-center gap-14')}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-base font-medium text-white',
                  pathname === link.href && 'rounded-full bg-[#2B2B2B] px-4 py-2',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className={cn('flex cursor-pointer items-center gap-2')}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={cn('text-base font-semibold text-[#FC335A]')}>{mockUser.name}</span>
            <PersonIcon />
          </button>
          {isOpen && (
            <div
              className={cn(
                'absolute top-9 right-14 flex w-full max-w-60 flex-col items-end gap-2 rounded-xl border border-[#2F2F2F] bg-[rgba(34,34,34,0.5)] p-6 backdrop-blur-[18px]',
              )}
            >
              <div className={cn('flex w-full flex-col gap-2')}>
                <span className={cn('text-2xl/tight font-semibold text-white')}>
                  {mockUser.name}
                </span>
                <span className={cn('text-sm/none font-medium text-[#9A9A9A]')}>
                  {mockUser.grade}학년 {mockUser.class}반 {mockUser.number}번
                </span>
              </div>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setIsOpen(false);
                }}
                className={cn('flex cursor-pointer items-center justify-end gap-4 px-3 py-1.5')}
              >
                <span className={cn('text-base font-medium text-white')}>로그아웃</span>
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
