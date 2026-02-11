import { post } from '@/shared/api/http';
import type { ProjectApiResponse } from '../model/api.types';


export const toggleProjectLike = (projectId: number) => {
  return post<ProjectApiResponse>(`/v1/projects/like/${projectId}`);
};
