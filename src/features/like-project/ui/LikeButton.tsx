'use client';

import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { GetProjectsResponseType } from '@/entities/project';
import { projectQueryKeys } from '@/shared/api';
import { LikeIcon } from '@/shared/assets';

import { useToggleProjectLike } from '../model/useToggleProjectLike';

interface LikeButtonProps {
  isLiked: boolean;
  projectId: number;
  isLoggedIn: boolean;
}

const LikeButton = ({ isLiked, projectId, isLoggedIn }: LikeButtonProps) => {
  const [localIsLiked, setLocalIsLiked] = useState(isLiked);
  const queryClient = useQueryClient();

  const { mutate: toggleLike } = useToggleProjectLike(projectId, {
    onMutate: () => setLocalIsLiked((prev) => !prev), // 낙관적 업데이트: 좋아요 상태를 즉시 반전
    onError: () => setLocalIsLiked(isLiked), // 에러 발생 시 원래 상태로 롤백
    onSuccess: (_, currentIsLiked) => {
      queryClient.setQueryData<GetProjectsResponseType>(projectQueryKeys.getProjects(), (old) => {
        if (!old) return old;
        return {
          ...old,
          projects: old.projects.map((p) =>
            p.projectId === projectId ? { ...p, liked: !currentIsLiked } : p,
          ),
        };
      });

      // 마이 프로젝트 캐시 업데이트
      queryClient.setQueryData<GetProjectsResponseType>(projectQueryKeys.getMyProjects(), (old) => {
        if (!old) return old;

        // 좋아요 취소 → 프로젝트 제거
        if (currentIsLiked) {
          return {
            ...old,
            projects: old.projects.filter((p) => p.projectId !== projectId),
          };
        }

        // 좋아요 추가 → 프로젝트 추가 (전체 목록에서 찾아서)
        const allProjects = queryClient.getQueryData<GetProjectsResponseType>(
          projectQueryKeys.getProjects(),
        );
        const projectToAdd = allProjects?.projects.find((p) => p.projectId === projectId);

        if (projectToAdd) {
          return {
            ...old,
            projects: [{ ...projectToAdd, liked: true }, ...old.projects],
          };
        }

        return old;
      });
    },
  });

  const handleClick = () => {
    if (!isLoggedIn) {
      toast('로그인이 필요한 기능입니다');
      return;
    }
    toggleLike(localIsLiked);
  };

  return <LikeIcon isLiked={localIsLiked} onClick={handleClick} />;
};

export default LikeButton;
