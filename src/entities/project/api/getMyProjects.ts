import { cookies } from 'next/headers';

import { projectUrl } from '@/shared/api';
import { COOKIE_KEYS } from '@/shared/constants';

import { MyProjectsListResponseType } from '../model/types';

export const getMyProjects = async (): Promise<MyProjectsListResponseType | undefined> => {
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
      console.error(`[getMyProjects] HTTP 오류: ${response.status} ${response.statusText}`);
      return undefined;
    }

    const myProjectsData = await response.json();

    return myProjectsData;
  } catch (error) {
    console.error('[getMyProjects] 마이페이지 프로젝트 조회 실패:', error);
    return undefined;
  }
};
