import { getMyPendingProjects } from '@/entities/project/api/getMyPendingProjects';
import { getMyRejectedProjects } from '@/entities/project/api/getMyRejectedProjects';
import { getMyProjects } from '@/entities/project/index.server';
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
