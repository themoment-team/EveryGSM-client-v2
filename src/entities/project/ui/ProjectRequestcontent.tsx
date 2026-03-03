'use client';

import type { CheckRequestStatusType, ProjectType } from '@/entities/project/model/types';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

interface ProjectRequestCardProps {
  data: ProjectType;
  requestStatus: CheckRequestStatusType;
}

const ProjectRequestcontent = ({ data, requestStatus }: ProjectRequestCardProps) => {
  const { closeModal } = useModalStore();

  return <div>ProjectRequestcontent</div>;
};

export default ProjectRequestcontent;
