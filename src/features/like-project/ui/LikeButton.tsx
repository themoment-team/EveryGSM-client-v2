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
