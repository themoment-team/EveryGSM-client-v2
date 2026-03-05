import { cookies } from 'next/headers';

import { getProjects } from '@/entities/project/index.server';
import { COOKIE_KEYS } from '@/shared/constants';
import { cn } from '@/shared/utils';
import { HeroSection } from '@/widgets/hero-section';
import { ProjectList } from '@/widgets/project-list';

const HomePage = async () => {
  const initialProjectsData = await getProjects();

  const cookieStore = await cookies();
  const accessToken = cookieStore.get(COOKIE_KEYS.ACCESS_TOKEN)?.value;
  const isLoggedIn = Boolean(accessToken);

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#191919]">
      <div className={cn('flex flex-col gap-y-10 px-15 py-10')}>
        <HeroSection
          title={`GSM의 프로젝트를 한 눈에,\nEveryGSM에서 간편하게 확인해보세요!`}
          description={`EveryGSM은 GSM의 프로젝트들을 한 곳에 모아 트래픽을 집중시키기 위한 서비스로,\n사용자가 GSM의 사이트를 보다 쉽게 방문하기 위해 만들어졌습니다.`}
        />
        <ProjectList initialProjectsData={initialProjectsData} isLoggedIn={isLoggedIn} />
      </div>
    </main>
  );
};

export default HomePage;
