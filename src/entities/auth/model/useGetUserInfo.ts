import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { authQueryKeys, authUrl, get } from '@/shared/api';
import { minutesToMs } from '@/shared/utils';

import { UserInfoResponseType } from './types';

export const useGetUserInfo = (
  options?: Omit<UseQueryOptions<UserInfoResponseType>, 'queryKey' | 'queryFn'>,
) =>
  useQuery({
    queryKey: authQueryKeys.getUserInfo(),
    queryFn: () => get<UserInfoResponseType>(authUrl.getUserInfo()),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(10),
    ...options,
  });
