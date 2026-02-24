import { useQuery } from '@tanstack/react-query';

import { ProjectType } from '@/entities/project';
import { API_URLS, get } from '@/shared/api';

const getPending = () => {
  return get<ProjectType[]>(API_URLS.projects.pending);
};

const useGetPending = () => {
  return useQuery<ProjectType[]>({
    queryKey: ['pendingProjects'],
    queryFn: getPending,
  });
};

export default useGetPending;
