export type ProjectStatus = 'active' | 'pending' | 'completed';

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
  status: ProjectStatus;
}
