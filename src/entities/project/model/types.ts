export type RequestStatus = '승인' | '거절' | '확인 중';

export interface Project {
  id: number;
  imageSrc: string;
  projectName: string;
  teamName: string;
  description: string;
  tags: string[];
  links: { title: string; url: string }[];
  deployLink: string;
}

export interface MainCardModel extends Project {
  isLiked: boolean;
}

export interface ProjectRequest {
  id: number;
  imageSrc: string;
  projectName: string;
  teamName: string;
  date: string;
  requestStatus: RequestStatus;
}
