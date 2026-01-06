import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_LINKS } from '@/shared/constants';
import { cn } from '@/shared/utils';

interface NavigationProps {
  role: 'client' | 'admin';
}

const Navigation = ({ role }: NavigationProps) => {
  const pathname = usePathname();
  const links = NAV_LINKS[role];

  return (
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
  );
};

export default Navigation;
