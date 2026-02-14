import { post } from '@/shared/api/http';

import type { ProjectType } from '../model/types';

export const toggleProjectLike = (projectId: number) => {
  return post<ProjectType>(`/v1/projects/like/${projectId}`);
};
