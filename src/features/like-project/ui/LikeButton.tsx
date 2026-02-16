'use client';

import { useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { toggleProjectLike } from '@/entities/project';
import type { ProjectType } from '@/entities/project/model/types';
import { LikeIcon } from '@/shared/assets';

interface LikeButtonProps {
  isLiked: boolean;
  projectId: number;
  onSuccess: (updated: ProjectType) => void;
}

export const LikeButton = ({ isLiked, projectId, onSuccess }: LikeButtonProps) => {
  const [localIsLiked, setLocalIsLiked] = useState(isLiked);

  useEffect(() => {
    setLocalIsLiked(isLiked);
  }, [isLiked]);

  const mutation = useMutation({
    mutationFn: () => toggleProjectLike(projectId),
    onSuccess: (data) => {
      setLocalIsLiked(data.liked);
      onSuccess(data);
    },
    onError: (error) => {
      console.error(error);
      alert('좋아요 처리 중 오류가 발생했습니다.');
      setLocalIsLiked(isLiked);
    },
  });

  const handleToggle = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('로그인을 진행해주세요.');
      return;
    }

    if (!mutation.isPending) {
      mutation.mutate();
    }
  };

  return <LikeIcon isLiked={localIsLiked} onClick={handleToggle} />;
};
