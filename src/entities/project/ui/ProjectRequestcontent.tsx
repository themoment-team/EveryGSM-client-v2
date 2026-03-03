import type { CheckRequestStatusType, ProjectType } from '@/entities/project/model/types';
import { cn } from '@/shared/utils';

const ProjectRequestcontent = ({ data, requestStatus }: ProjectRequestCardProps) => {
  interface ProjectRequestCardProps {
    data: ProjectType;
    requestStatus: CheckRequestStatusType;
  }

  return <div>ProjectRequestcontent</div>;
};

export default ProjectRequestcontent;
