export const API_URLS = {
  projects: {
    list: '/v1/projects',
    my: '/v2/projects/my',
    like: (projectId: number) => `/v1/projects/like/${projectId}`,
    rejeckted: '/v2/projects/my/rejected',
    pending: '/v2/projects/my/pending',
  },
} as const;
