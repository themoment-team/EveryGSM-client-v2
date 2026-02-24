import { useQuery } from '@tanstack/react-query';

import { ProjectType } from '@/entities/project';
import { API_URLS, get } from '@/shared/api';

const getRejected = () => {
  return get<ProjectType[]>(API_URLS.projects.rejected);
};

const useGetRejected = () => {
  return useQuery<ProjectType[]>({
    queryKey: ['rejectedProjects'],
    queryFn: getRejected,
  });
};

export default useGetRejected;
