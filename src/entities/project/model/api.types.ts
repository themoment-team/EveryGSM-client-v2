export interface ProjectApiResponse {
  projectId: number;
  logo: string;
  title: string;
  affiliation: string;
  description: string;
  prodUrl: string;
  status: string;
  reason: string;
  createdAt: string;
  techStack: {
    stackName: string;
  }[];
  repository: {
    repoUrl: string;
  }[];
  liked: boolean;
}

export interface GetProjectsResponse {
  projects: ProjectApiResponse[];
}
