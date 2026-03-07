'use client';

import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { GetProjectsResponseType } from '@/entities/project';
import { projectQueryKeys } from '@/shared/api';
import { LikeIcon } from '@/shared/assets';

import { useToggleProjectLike } from '../model/useToggleProjectLike';

interface LikeButtonProps {
  isLiked: boolean;
  projectId: number;
}

const LikeButton = ({ isLiked, projectId }: LikeButtonProps) => {
  const [localIsLiked, setLocalIsLiked] = useState(isLiked);
  const queryClient = useQueryClient();
  const isLoggedIn = false; // TODO: 인증 기능 개발 후 실제 로그인 상태로 대체

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
      console.log('로그인이 필요한 기능입니다.'); // TODO: 로그인 모달 열기, 토스트 등 실제 로그인 유도 UI로 대체
      return;
    }
    toggleLike(localIsLiked);
  };

  return <LikeIcon isLiked={localIsLiked} onClick={handleClick} />;
};

export default LikeButton;
