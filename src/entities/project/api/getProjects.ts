import { get } from '@/shared/api/http';

import { GetProjectsResponse } from '../model/api.types';

export const getProjects = async (): Promise<GetProjectsResponse> => {
  return await get<GetProjectsResponse>('/v1/projects');
};
