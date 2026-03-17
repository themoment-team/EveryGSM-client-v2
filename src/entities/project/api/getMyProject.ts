import { cookies } from 'next/headers';

import { projectUrl } from '@/shared/api';
import { COOKIE_KEYS } from '@/shared/constants';

import { ProjectResponseType } from '../model/types';

export const getMyProject = async (id: number): Promise<ProjectResponseType | undefined> => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

    const url = new URL(projectUrl.getMyProject(id), process.env.NEXT_PUBLIC_API_BASE_URL);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`[getMyProject] HTTP 오류: ${response.status} ${response.statusText}`);
      return undefined;
    }

    const myProjectData = await response.json();

    return myProjectData;
  } catch (error) {
    console.error('[getMyProject] 마이페이지 프로젝트 조회 실패:', error);
    return undefined;
  }
};
