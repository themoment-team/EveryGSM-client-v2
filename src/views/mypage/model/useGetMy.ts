import { useQuery } from '@tanstack/react-query';

import { API_URLS, get } from '@/shared/api';
import { GetMyResponse } from '@/widgets/mypage';

const getMy = () => {
  return get<GetMyResponse>(API_URLS.projects.my);
};

const useGetMy = () => {
  return useQuery<GetMyResponse>({
    queryKey: ['my'],
    queryFn: getMy,
  });
};

export default useGetMy;
