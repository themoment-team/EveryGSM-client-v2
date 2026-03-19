'use client';

import { useMemo } from 'react';

import { usePathname } from 'next/navigation';

import { COOKIE_KEYS } from '@/shared/constants';
import { getCookie } from '@/shared/utils';

import { parseAuthUserFromAccessToken } from './accessToken';

export const useAuthSession = () => {
  usePathname();
  const accessToken = getCookie(COOKIE_KEYS.ACCESS_TOKEN);

  const user = useMemo(
    () => (accessToken ? parseAuthUserFromAccessToken(accessToken) : null),
    [accessToken],
  );

  return {
    accessToken,
    isAuthenticated: Boolean(accessToken),
    user,
  };
};
