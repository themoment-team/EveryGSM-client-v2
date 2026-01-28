import type { MainCardModel, ProjectRequest } from './types';

export const projectMockList: MainCardModel[] = [
  {
    id: 1,
    imageSrc: '/images/example.jpg',
    projectName: 'EveryGSM',
    teamName: 'The Moment',
    description: 'GSM의 모든 프로젝트를 한 눈에 확인할 수 있는 서비스입니다.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'FSD'],
    links: [
      { title: 'GitHub', url: 'https://github.com/themoment-team/EveryGSM-client-v2' },
      { title: 'Service', url: 'https://everygsm.com' },
    ],
    deployLink: 'https://everygsm.com',
    isLiked: true,
  },
  {
    id: 2,
    imageSrc: '/images/example.jpg',
    projectName: 'HelloGSM',
    teamName: 'The Moment',
    description: '광주소프트웨어마이서고등학교 입학 지원 서비스입니다.',
    tags: ['Next.js', 'TypeScript', 'Emotion'],
    links: [{ title: 'GitHub', url: 'https://github.com/themoment-team/hellogsm' }],
    deployLink: 'https://hellogsm.kr',
    isLiked: false,
  },
  {
    id: 3,
    imageSrc: '/images/example.jpg',
    projectName: 'GSM-Auction',
    teamName: 'Side Project',
    description: 'GSM 학생들을 위한 경매 서비스입니다.',
    tags: ['React', 'JavaScript', 'Styled-Components'],
    links: [{ title: 'GitHub', url: 'https://github.com' }],
    deployLink: 'https://auction.gsm',
    isLiked: true,
  },
];

export const projectRequestMockList: ProjectRequest[] = [
  {
    id: 1,
    imageSrc: '/images/example.jpg',
    projectName: 'EveryGSM v2',
    teamName: 'The Moment',
    date: '2026-01-27',
    requestStatus: '확인 중',
  },
  {
    id: 2,
    imageSrc: '/images/example.jpg',
    projectName: 'Old Project',
    teamName: 'Old Team',
    date: '2025-12-25',
    requestStatus: '거절',
  },
  {
    id: 3,
    imageSrc: '/images/example.jpg',
    projectName: 'New Idea',
    teamName: 'Dream Team',
    date: '2026-01-20',
    requestStatus: '승인',
  },
];
