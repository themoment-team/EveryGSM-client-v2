import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { get, projectQueryKeys, projectUrl } from '@/shared/api';
import { minutesToMs } from '@/shared/utils';

import { GetProjectsResponseType } from './types';

export const useGetProjects = (
  options?: Omit<UseQueryOptions<GetProjectsResponseType>, 'queryKey' | 'queryFn'>,
) =>
  useQuery({
    queryKey: projectQueryKeys.getProjects(),
    queryFn: () => get<GetProjectsResponseType>(projectUrl.getProjects()),
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(10),
    ...options,
  });
