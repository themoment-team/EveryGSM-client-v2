import {
  getMyPendingProjects,
  getMyProjects,
  getMyRejectedProjects,
} from '@/entities/project/index.server';
import { MyPage } from '@/views/mypage';

const Mypage = async () => {
  const [initialMyProjectsData, initialMyPendingProjectsData, initialMyRejectedProjectsData] =
    await Promise.all([getMyProjects(), getMyPendingProjects(), getMyRejectedProjects()]);

  return (
    <MyPage
      initialMyProjectsData={initialMyProjectsData}
      initialMyPendingProjectsData={initialMyPendingProjectsData}
      initialMyRejectedProjectsData={initialMyRejectedProjectsData}
    />
  );
};

export default Mypage;
