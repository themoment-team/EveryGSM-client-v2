import { adminUrl } from '@/shared/api';
import { apiFetcher } from '@/shared/api/fetcher';

import { ProjectResponseType, ProjectType } from '../model/types';

export const getAdminRequest = async (id: number): Promise<ProjectType | null | undefined> => {
  const data = await apiFetcher<ProjectResponseType>({
    endpoint: adminUrl.getAdminRequest(id),
    context: 'getAdminRequest',
    errorMessage: '어드민 프로젝트 조회 실패',
  });

  return data?.data ?? null;
};
