import { ApiResponse } from '@/shared/types/base';

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

export interface ProjectsListType {
  projects: ProjectType[];
}

export type ProjectsListResponseType = ApiResponse<ProjectsListType>;

export interface MyProjectsType {
  liked: ProjectType[];
  registered: ProjectType[];
}

export type MyProjectsListResponseType = ApiResponse<MyProjectsType>;
