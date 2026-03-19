import { authUrl } from '@/shared/api';
import { apiFetcher } from '@/shared/api/fetcher';

import { UserInfoResponseType } from '../model/types';

export const getUserInfo = async (): Promise<UserInfoResponseType | undefined> => {
  return apiFetcher<UserInfoResponseType>({
    endpoint: authUrl.getUserInfo(),
    context: 'getUserInfo',
    errorMessage: '사용자 정보 조회 실패:',
  });
};
