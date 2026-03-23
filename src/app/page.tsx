import { getUserInfo } from '@/entities/auth/index.server';
import { getProjects } from '@/entities/project/index.server';
import { HomePage } from '@/views/home';

const Home = async () => {
  const [initialUserInfoData, initialProjectsData] = await Promise.all([
    getUserInfo(),
    getProjects(),
  ]);

  return (
    <HomePage initialUserInfoData={initialUserInfoData} initialProjectsData={initialProjectsData} />
  );
};

export default Home;
