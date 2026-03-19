import { cookies } from 'next/headers';

import { projectUrl } from '@/shared/api';
import { COOKIE_KEYS } from '@/shared/constants';

import { GetMyResponseType } from '../model/types';

export const getMy = async (): Promise<GetMyResponseType | undefined> => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

    const url = new URL(projectUrl.getMyProjects(), process.env.NEXT_PUBLIC_API_BASE_URL);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`[getMy] HTTP 오류: ${response.status} ${response.statusText}`);
      return undefined;
    }

    const myData = await response.json();

    return myData;
  } catch (error) {
    console.error('[getMy] 내 프로젝트 목록 조회 실패:', error);
    return undefined;
  }
};
