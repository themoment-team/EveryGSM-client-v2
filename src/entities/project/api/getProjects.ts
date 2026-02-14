import { get } from '@/shared/api/http';
import { API_URLS } from '@/shared/api/apiUrls';

import { GetProjectsResponseType } from '../model/types';

export const getProjects = () => {
  return get<GetProjectsResponseType>(API_URLS.projects.list);
};
