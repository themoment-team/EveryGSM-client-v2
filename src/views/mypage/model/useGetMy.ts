import { useQuery } from '@tanstack/react-query';

import { get, projectQueryKeys, projectUrl } from '@/shared/api';
import { GetMyResponse } from '@/widgets/requestedProject';

const getMy = () => {
  return get<GetMyResponse>(projectUrl.getMyProjects());
};

const useGetMy = () => {
  return useQuery<GetMyResponse>({
    queryKey: projectQueryKeys.getMyProjects(),
    queryFn: getMy,
  });
};

export default useGetMy;
