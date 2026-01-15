export interface ProjectLink {
  title: string;
  url: string;
}

export interface Project {
  id: number;
  imageSrc: string;
  projectName: string;
  teamName: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  deployLink: string;
}

export interface ProjectWithLike extends Project {
  isLiked: boolean;
}

export interface ProjectRequest {
  id: number;
  imageSrc: string;
  projectName: string;
  teamName: string;
  date: string;
  requestStatus: ProjectRequestStatus;
}

export type ProjectRequestStatus = '대기' | '승인' | '거절';
