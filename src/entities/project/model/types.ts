export interface LinkType {
  title: string;
  url: string;
}

export interface MainCardModel {
  id: number;
  imageSrc: string;
  projectName: string;
  teamName: string;
  description: string;
  tags: string[];
  links: LinkType[];
  deployLink: string;
  isLiked: boolean;
}

export interface ProjectRequest {
  id: number;
  imageSrc: string;
  projectName: string;
  teamName: string;
  date: string;
  requestStatus: string;
}

export interface TechStackType {
  stackName: string;
}

export interface RepositoryType {
  repoUrl: string;
  repoName: string;
}

export interface ProjectType {
  projectId: number;
  logo: string;
  title: string;
  affiliation: string;
  description: string;
  prodUrl: string;
  status: string;
  reason: string;
  createdAt: string;
  techStack: TechStackType[];
  repository: RepositoryType[];
  liked: boolean;
}

export interface GetProjectsResponseType {
  projects: ProjectType[];
}
