import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { get, projectQueryKeys, projectUrl } from '@/shared/api';
import { minutesToMs } from '@/shared/utils';

import { ProjectResponseType } from './types';

export const useGetMyProject = (
  projectId?: number,
  options?: Omit<UseQueryOptions<ProjectResponseType>, 'queryKey' | 'queryFn'>,
) =>
  useQuery({
    queryKey: projectQueryKeys.getMyProject(projectId),
    queryFn: () => get<ProjectResponseType>(projectUrl.getMyProject(projectId)),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(10),
    ...options,
  });
