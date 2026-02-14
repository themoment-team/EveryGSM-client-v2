import { get } from '@/shared/api/http';

import { GetProjectsResponseType } from '../model/types';

export const getProjects = async (): Promise<GetProjectsResponseType> => {
  return get<GetProjectsResponseType>('/v1/projects');
};
