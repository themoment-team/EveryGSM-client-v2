'use client';
import { MainCard } from '@/widgets/maincard';
import { mainCardMockList } from '@/widgets/maincard/model/maincard.mock';

const Main = () => {
  return (
    <div className="flex min-h-screen flex-wrap gap-4 bg-black">
      {mainCardMockList.map((card) => (
        <MainCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Main;
