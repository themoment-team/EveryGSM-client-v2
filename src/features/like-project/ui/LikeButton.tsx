'use client';

import { useEffect, useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLocalIsLiked(isLiked);
  }, [isLiked]);

  const handleToggle = async () => {
    if (isLoading) return;

    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('로그인을 진행해주세요.');
      return;
    }

    try {
      setIsLoading(true);

      const updated = await toggleProjectLike(projectId);
      setLocalIsLiked(updated.liked);

      onSuccess(updated);
    } catch (error) {
      console.error(error);
      alert('좋아요 처리 중 오류가 발생했습니다.');
      setLocalIsLiked(isLiked);
    } finally {
      setIsLoading(false);
    }
  };

  return <LikeIcon isLiked={localIsLiked} onClick={handleToggle} />;
};
