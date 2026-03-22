import { projectUrl } from '@/shared/api';
import { apiFetcher } from '@/shared/api/fetcher';
import { BaseApiResponse } from '@/shared/types';

import { ProjectResponseType } from '../model/types';

export const getMyProject = async (
  id: number,
): Promise<ProjectResponseType | BaseApiResponse | undefined> => {
  return apiFetcher<ProjectResponseType | BaseApiResponse>({
    endpoint: projectUrl.getMyProject(id),
    context: 'getMyProject',
    errorMessage: '마이페이지 프로젝트 조회 실패:',
    returnErrorBody: true,
  });
};
