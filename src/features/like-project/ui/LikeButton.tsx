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

  const { mutate: toggleLike } = useToggleProjectLike(projectId, {
    onMutate: () => setLocalIsLiked((prev) => !prev), // 낙관적 업데이트: 좋아요 상태를 즉시 반전
    onError: () => setLocalIsLiked(isLiked), // 에러 발생 시 원래 상태로 롤백
  });

  return <LikeIcon isLiked={localIsLiked} onClick={() => toggleLike()} />;
};

export default LikeButton;
