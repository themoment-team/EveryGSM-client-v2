export const API_URLS = {
  projects: {
    list: '/v1/projects',
    my: '/v1/projects/my',
    like: (projectId: number) => `/v1/projects/like/${projectId}`,
  },
} as const;
