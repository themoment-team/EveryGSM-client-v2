'use client';

import { LikeIcon } from '@/shared/assets';

interface LikeButtonProps {
  projectId: number;
  isLiked: boolean;
  onToggle: (projectId: number) => void;
}

const LikeButton = ({ projectId, isLiked, onToggle }: LikeButtonProps) => {
  const handleClick = () => {
    onToggle(projectId);
  };

  return <LikeIcon isLiked={isLiked} onClick={handleClick} />;
};

export default LikeButton;
