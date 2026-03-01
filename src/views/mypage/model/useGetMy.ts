import { useQuery } from '@tanstack/react-query';

import { get, projectUrl } from '@/shared/api';
import { GetMyResponse } from '@/widgets/mypage';

const getMy = () => {
  return get<GetMyResponse>(projectUrl.getMyProjects());
};

const useGetMy = () => {
  return useQuery<GetMyResponse>({
    queryKey: ['my'],
    queryFn: getMy,
  });
};

export default useGetMy;
