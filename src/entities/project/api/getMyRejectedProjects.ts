import { cookies } from 'next/headers';

import { projectUrl } from '@/shared/api';
import { COOKIE_KEYS } from '@/shared/constants';

import { ProjectsListResponseType } from '../model/types';

export const getMyRejectedProjects = async (): Promise<ProjectsListResponseType | undefined> => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

    const url = new URL(projectUrl.getMyRejectedProjects(), process.env.NEXT_PUBLIC_API_BASE_URL);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`[getMyRejectedProjects] HTTP 오류: ${response.status} ${response.statusText}`);
      return undefined;
    }

    const myRejectedProjectsData = await response.json();

    return myRejectedProjectsData;
  } catch (error) {
    console.error('[getMyRejectedProjects] 마이페이지 프로젝트 조회 실패:', error);
    return undefined;
  }
};
