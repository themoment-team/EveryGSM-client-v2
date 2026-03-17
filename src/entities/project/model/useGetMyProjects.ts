import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { get, projectQueryKeys, projectUrl } from '@/shared/api';
import { minutesToMs } from '@/shared/utils';

import { MyProjectsListResponseType } from './types';

export const useGetMyProjects = (
  options?: Omit<UseQueryOptions<MyProjectsListResponseType>, 'queryKey' | 'queryFn'>,
) =>
  useQuery({
    queryKey: projectQueryKeys.getMyProjects(),
    queryFn: () => get<MyProjectsListResponseType>(projectUrl.getMyProjects()),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(10),
    ...options,
  });
