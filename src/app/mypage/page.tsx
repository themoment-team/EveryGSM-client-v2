import { getUserInfo } from '@/entities/auth/index.server';
import {
  getMyPendingProjects,
  getMyProjects,
  getMyRejectedProjects,
} from '@/entities/project/index.server';
import { MyPage } from '@/views/mypage';

const Mypage = async () => {
  const [
    initialUserInfoData,
    initialMyProjectsData,
    initialMyPendingProjectsData,
    initialMyRejectedProjectsData,
  ] = await Promise.all([
    getUserInfo(),
    getMyProjects(),
    getMyPendingProjects(),
    getMyRejectedProjects(),
  ]);

  return (
    <MyPage
      initialUserInfoData={initialUserInfoData}
      initialMyProjectsData={initialMyProjectsData}
      initialMyPendingProjectsData={initialMyPendingProjectsData}
      initialMyRejectedProjectsData={initialMyRejectedProjectsData}
    />
  );
};

export default Mypage;
