import { cookies } from 'next/headers';

import { projectUrl } from '@/shared/api';
import { COOKIE_KEYS } from '@/shared/constants';

import { GetProjectsResponseType } from '../model/types';

export const getProjects = async (): Promise<GetProjectsResponseType | undefined> => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

    const url = new URL(projectUrl.getProjects(), process.env.NEXT_PUBLIC_API_BASE_URL);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return undefined;
    }

    const projectsData = await response.json();

    return projectsData;
  } catch {
    return undefined;
  }
};
