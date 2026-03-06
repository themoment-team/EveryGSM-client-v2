import { useQuery } from '@tanstack/react-query';

import { GetMyResponseType } from '@/entities/project';
import { get, projectQueryKeys, projectUrl } from '@/shared/api';

const getMy = () => {
  return get<GetMyResponseType>(projectUrl.getMyProjects());
};

const useGetMy = () => {
  return useQuery<GetMyResponseType>({
    queryKey: projectQueryKeys.getMyProjects(),
    queryFn: getMy,
  });
};

export default useGetMy;
