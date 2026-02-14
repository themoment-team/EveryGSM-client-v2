import { post } from '@/shared/api/http';
import { API_URLS } from '@/shared/api/apiUrls';

import type { ProjectType } from '../model/types';

export const toggleProjectLike = (projectId: number) => {
  return post<ProjectType>(API_URLS.projects.like(projectId));
};
