'use client';
import { MainCard } from '@/widgets/maincard';

const Main = () => {
  const MainCardProps = {
    imageSrc: '',
    projectName: '프로젝트 이름',
    teamName: '소속 동아리/팀명',
    description:
      '200자가 되는지를 확인해보겠습니다. 200자가 되는지를 확인해보겠습니다. 200자가 되는지를 확인해보겠습니다. 200자가 되는지를 확인해보겠습니다. 200자가 되는지를 확인해보겠습니다. 200자가 되는지를 확인해보겠습니다. 200자가 되는지를 확인해보겠습니다.확인해보겠습니다. ',
    tags: ['NextJS', 'NextJS', 'NextJS', 'NextJS', 'NextJS'],
    links: [
      { title: 'Frontend Repository', url: 'https://github.com/seoxeon09' },
      { title: 'Backend Repository', url: 'https://github.com/seoxeon09' },
      { title: 'Design System', url: 'https://github.com/seoxeon09' },
    ],

    deployLink: 'https://www.hellogsm.kr/',
  };

  return (
    <div className="flex min-h-screen flex-wrap gap-4 bg-black">
      <MainCard {...MainCardProps} isLiked={true} status="active" />
      <MainCard {...MainCardProps} isLiked={false} status="pending" />
      <MainCard {...MainCardProps} isLiked={true} status="completed" />
    </div>
  );
};

export default Main;
