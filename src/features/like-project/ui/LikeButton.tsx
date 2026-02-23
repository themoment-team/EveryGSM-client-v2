'use client';

import { useState } from 'react';

import { LikeIcon } from '@/shared/assets';

import { useToggleProjectLike } from '../model/useToggleProjectLike';

interface LikeButtonProps {
  isLiked: boolean;
  projectId: number;
}

const LikeButton = ({ isLiked, projectId }: LikeButtonProps) => {
  const [localIsLiked, setLocalIsLiked] = useState(isLiked);
  const isLoggedIn = false; // TODO: 인증 기능 개발 후 실제 로그인 상태로 대체

  const { mutate: toggleLike } = useToggleProjectLike(projectId, {
    onMutate: () => setLocalIsLiked((prev) => !prev), // 낙관적 업데이트: 좋아요 상태를 즉시 반전
    onError: () => setLocalIsLiked(isLiked), // 에러 발생 시 원래 상태로 롤백
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
