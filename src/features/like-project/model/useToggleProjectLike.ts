import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { ProjectType } from '@/entities/project';
import { post, projectQueryKeys, projectUrl } from '@/shared/api';

export const useToggleProjectLike = (
  projectId: number,
  options?: Omit<UseMutationOptions<ProjectType, AxiosError, void>, 'mutationKey' | 'mutationFn'>,
) =>
  useMutation({
    mutationKey: projectQueryKeys.postProjectLike(projectId),
    mutationFn: () => post<ProjectType>(projectUrl.postProjectLike(projectId)),
    ...options,
  });
