'use client';

import { useState } from 'react';

import { LikeIcon } from '@/shared/assets';
import { toggleProjectLike } from '@/entities/project';

interface LikeButtonProps {
  isLiked: boolean;
  projectId: number;
  onSuccess: () => void;
}

export const LikeButton = ({
  isLiked,
  projectId,
  onSuccess,
}: LikeButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async () => {
    if (isLoading) return;

    // TODO: 인증 토큰 처리 방식은 공통 auth 영역에서 관리하도록 추후 통합 예정
    // 현재는 로그인 여부만 간단히 체크
    const token = localStorage.getItem('accessToken');

    if (!token) {
      alert('로그인을 진행해주세요.');
      return;
    }

    try {
      setIsLoading(true);

      await toggleProjectLike(projectId);

      onSuccess();
    } catch (error) {
      console.error(error);
      alert('좋아요 처리 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LikeIcon
      isLiked={isLiked}
      onClick={handleToggle}
    />
  );
};
