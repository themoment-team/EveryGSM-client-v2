import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { ProjectType } from '@/entities/project';
import { del, post, projectQueryKeys, projectUrl } from '@/shared/api';

export const useToggleProjectLike = (
  projectId: number,
  options?: Omit<
    UseMutationOptions<ProjectType, AxiosError, boolean>,
    'mutationKey' | 'mutationFn'
  >,
) =>
  useMutation({
    mutationKey: projectQueryKeys.toggleProjectLike(projectId),
    mutationFn: (isLiked: boolean) =>
      isLiked
        ? del<ProjectType>(projectUrl.deleteProjectLike(projectId))
        : post<ProjectType>(projectUrl.postProjectLike(projectId)),
    ...options,
  });
