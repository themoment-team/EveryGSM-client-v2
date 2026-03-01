import { useQuery } from '@tanstack/react-query';

import { ProjectType } from '@/entities/project';
import { get, projectUrl } from '@/shared/api';

const getRejected = () => {
  return get<ProjectType[]>(projectUrl.getMyRejectedProjects());
};

const useGetRejected = () => {
  return useQuery<ProjectType[]>({
    queryKey: ['rejectedProjects'],
    queryFn: getRejected,
  });
};

export default useGetRejected;
