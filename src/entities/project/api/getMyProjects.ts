import { projectUrl } from '@/shared/api';
import { apiFetcher } from '@/shared/api/fetcher';

import { MyProjectsListResponseType } from '../model/types';

export const getMyProjects = async (): Promise<MyProjectsListResponseType | undefined> => {
  return apiFetcher<MyProjectsListResponseType>({
    endpoint: projectUrl.getMyProjects(),
    context: 'getMyProjects',
    errorMessage: '마이페이지 프로젝트 조회 실패:',
  });
};
