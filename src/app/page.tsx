import { Suspense } from 'react';

import { getUserInfo } from '@/entities/auth/index.server';
import { getProjects } from '@/entities/project/index.server';
import { SuspenseFallback } from '@/shared/ui';
import { HomePage } from '@/views/home';

const Home = async () => {
  const [initialUserInfoData, initialProjectsData] = await Promise.all([
    getUserInfo(),
    getProjects(),
  ]);

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <HomePage
        initialUserInfoData={initialUserInfoData}
        initialProjectsData={initialProjectsData}
      />
    </Suspense>
  );
};

export default Home;
