'use client';

import { useState } from 'react';

import { LikeIcon } from '@/shared/assets';

interface LikeButtonProps {
  isLiked: boolean;
  projectId: number;
}

export const LikeButton = ({ isLiked, projectId }: LikeButtonProps) => {
  const [liked, setLiked] = useState(isLiked);

  const handleToggle = () => {
    // 여기에 나중에 API 호출 로직을 넣을 수 있습니다.
    // 지금은 사용자 피드백대로 아주 쉬운 로직으로 유지합니다.
    setLiked(!liked);
    console.log(`Project ${projectId} liked state: ${!liked}`);
  };

  return <LikeIcon isLiked={liked} onClick={handleToggle} />;
};
