import { projectUrl } from '@/shared/api';
import { apiFetcher } from '@/shared/api/fetcher';

import { ProjectsListResponseType } from '../model/types';

export const getMyRejectedProjects = async (): Promise<ProjectsListResponseType | undefined> => {
  return apiFetcher<ProjectsListResponseType>({
    endpoint: projectUrl.getMyRejectedProjects(),
    context: 'getMyRejectedProjects',
    errorMessage: '마이페이지 프로젝트 조회 실패:',
  });
};
