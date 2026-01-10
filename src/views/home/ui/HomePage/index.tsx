'use client';

import { cn } from '@/shared/utils';
import { mainCardMockList } from '@/views/home/model/mock';
import MainCard from '@/widgets/home/ui/ProjectCard';

const HomePage = () => {
  return (
    <div className={cn('flex min-h-screen flex-wrap gap-4 bg-black')}>
      {mainCardMockList.map((card) => (
        <MainCard key={card.id} data={card} />
      ))}
    </div>
  );
};

export default HomePage;
