import { Suspense } from 'react';

import { getMyInfo } from '@/entities/auth/index.server';
import {
  getMyPendingProjects,
  getMyProjects,
  getMyRejectedProjects,
} from '@/entities/project/index.server';
import { SuspenseFallback } from '@/shared/ui';
import { MyPage } from '@/views/mypage';

const Mypage = async () => {
  const [
    initialUserInfoData,
    initialMyProjectsData,
    initialMyPendingProjectsData,
    initialMyRejectedProjectsData,
  ] = await Promise.all([
    getMyInfo(),
    getMyProjects(),
    getMyPendingProjects(),
    getMyRejectedProjects(),
  ]);

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <MyPage
        initialUserInfoData={initialUserInfoData}
        initialMyProjectsData={initialMyProjectsData}
        initialMyPendingProjectsData={initialMyPendingProjectsData}
        initialMyRejectedProjectsData={initialMyRejectedProjectsData}
      />
    </Suspense>
  );
};

export default Mypage;
