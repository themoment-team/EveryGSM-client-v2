'use client';

import { useCallback, useState } from 'react';

export const useLikeProject = () => {
  const [likedProjects, setLikedProjects] = useState<Record<number, boolean>>({});

  const toggleLike = useCallback((projectId: number) => {
    setLikedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));

    // TODO: API 호출 구현
    // await likeProjectAPI(projectId);
  }, []);

  const isLiked = useCallback(
    (projectId: number) => {
      return likedProjects[projectId] || false;
    },
    [likedProjects],
  );

  return {
    toggleLike,
    isLiked,
    likedProjects,
  };
};
