import { getMyProjects } from '@/entities/project/index.server';
import { MyPage } from '@/views/mypage';

const Mypage = async () => {
  const [initialMyProjectsData] = await Promise.all([getMyProjects()]);

  return <MyPage initialMyProjectsData={initialMyProjectsData} />;
};

export default Mypage;
