import { getProjects } from '@/entities/project/index.server';
import { HomePage } from '@/views/home';

const Home = async () => {
  const [initialProjectsData] = await Promise.all([getProjects()]);

  return <HomePage initialProjectsData={initialProjectsData} />;
};

export default Home;
