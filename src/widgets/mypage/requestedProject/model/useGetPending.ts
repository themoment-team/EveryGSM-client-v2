import { useQuery } from '@tanstack/react-query';

import { ProjectType } from '@/entities/project';
import { get, projectUrl } from '@/shared/api';

const getPending = () => {
  return get<ProjectType[]>(projectUrl.getMyPendingProjects());
};

const useGetPending = () => {
  return useQuery<ProjectType[]>({
    queryKey: ['pendingProjects'],
    queryFn: getPending,
  });
};

export default useGetPending;
