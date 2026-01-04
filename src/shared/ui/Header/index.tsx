'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo, PersonIcon } from '@/shared/assets';
import { NAV_LINKS } from '@/shared/constants';
import { cn } from '@/shared/utils';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const pathname = usePathname();

  const role = 'client';
  const links = NAV_LINKS[role];

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
          <button className={cn('flex cursor-pointer items-center gap-2')}>
            <span className={cn('text-base font-semibold text-[#FC335A]')}>홍길동</span>
            <PersonIcon />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
