import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { get, projectQueryKeys, projectUrl } from '@/shared/api';
import { minutesToMs } from '@/shared/utils';

import { ProjectsListResponseType } from './types';

export const useGetMyPendingProjects = (
  options?: Omit<UseQueryOptions<ProjectsListResponseType>, 'queryKey' | 'queryFn'>,
) =>
  useQuery({
    queryKey: projectQueryKeys.getMyPendingProjects(),
    queryFn: () => get<ProjectsListResponseType>(projectUrl.getMyPendingProjects()),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(10),
    ...options,
  });
