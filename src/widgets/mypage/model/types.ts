import { ProjectType } from '@/entities/project';

export interface GetMyResponse {
  liked: ProjectType[];
  registered: ProjectType[];
}
