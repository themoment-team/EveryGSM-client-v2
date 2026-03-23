import { projectUrl } from '@/shared/api';
import { apiFetcher } from '@/shared/api/fetcher';

import { ProjectsListResponseType } from '../model/types';

export const getProjects = async (): Promise<ProjectsListResponseType | undefined> => {
  return apiFetcher<ProjectsListResponseType>({
    endpoint: projectUrl.getProjects(),
    context: 'getProjects',
    errorMessage: '프로젝트 목록 조회 실패:',
  });
};
