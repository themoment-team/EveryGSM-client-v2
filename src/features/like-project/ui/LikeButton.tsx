'use client';

import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { MyProjectsListResponseType, ProjectsListResponseType } from '@/entities/project';
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

  const updateProjectsListLike = (
    old: ProjectsListResponseType | undefined,
    currentIsLiked: boolean,
  ) => {
    if (!old) return old;

    return {
      ...old,
      data: {
        ...old.data,
        projects: old.data.projects.map((p) =>
          p.projectId === projectId ? { ...p, liked: !currentIsLiked } : p,
        ),
      },
    };
  };

  const updateMyProjectsLike = (
    old: MyProjectsListResponseType | undefined,
    currentIsLiked: boolean,
  ) => {
    if (!old) return old;

    return {
      ...old,
      data: {
        ...old.data,
        liked: old.data.liked.map((p) =>
          p.projectId === projectId ? { ...p, liked: !currentIsLiked } : p,
        ),
        registered: old.data.registered.map((p) =>
          p.projectId === projectId ? { ...p, liked: !currentIsLiked } : p,
        ),
      },
    };
  };

  const { mutate: toggleLike } = useToggleProjectLike(projectId, {
    onMutate: () => setLocalIsLiked((prev) => !prev), // 낙관적 업데이트: 좋아요 상태를 즉시 반전
    onError: () => setLocalIsLiked((prev) => !prev), // 에러 발생 시 직전 상태로 롤백
    onSuccess: (_, currentIsLiked) => {
      queryClient.setQueryData<ProjectsListResponseType>(projectQueryKeys.getProjects(), (old) =>
        updateProjectsListLike(old, currentIsLiked),
      );
      queryClient.setQueryData<MyProjectsListResponseType>(
        projectQueryKeys.getMyProjects(),
        (old) => updateMyProjectsLike(old, currentIsLiked),
      );
      queryClient.setQueryData<ProjectsListResponseType>(
        projectQueryKeys.getMyPendingProjects(),
        (old) => updateProjectsListLike(old, currentIsLiked),
      );
      queryClient.setQueryData<ProjectsListResponseType>(
        projectQueryKeys.getMyRejectedProjects(),
        (old) => updateProjectsListLike(old, currentIsLiked),
      );
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
