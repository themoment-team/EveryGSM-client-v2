import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { GetMyResponseType } from '@/entities/project';
import { get, projectQueryKeys, projectUrl } from '@/shared/api';
import { minutesToMs } from '@/shared/utils';

const getMy = () => {
  return get<GetMyResponseType>(projectUrl.getMyProjects());
};

const useGetMy = (
  initialData?: GetMyResponseType,
  options?: Omit<UseQueryOptions<GetMyResponseType>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<GetMyResponseType>({
    queryKey: projectQueryKeys.getMyProjects(),
    queryFn: getMy,
    initialData,
    staleTime: minutesToMs(5),
    gcTime: minutesToMs(10),
    ...options,
  });
};

export default useGetMy;
