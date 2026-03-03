import { useQuery } from '@tanstack/react-query';

import { ProjectType } from '@/entities/project';
import { get, projectQueryKeys, projectUrl } from '@/shared/api';

const getRejected = () => {
  return get<ProjectType[]>(projectUrl.getMyRejectedProjects());
};

const useGetRejected = () => {
  return useQuery<ProjectType[]>({
    queryKey: projectQueryKeys.getMyRejectedProjects(),
    queryFn: getRejected,
  });
};

export default useGetRejected;
