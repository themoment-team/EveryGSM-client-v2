export interface Contentstype {
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  projectGithubUrl: string[];
  projectLogoUri?: string;
  creatorName?: string;
  creatorDescription: string;
  creatorLogoUri?: any;
  creatorGithubUrl: string;
  category: string[];
  heartCount: number;
  createdAt: string;
}
