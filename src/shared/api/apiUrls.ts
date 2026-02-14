export const API_URLS = {
  projects: {
    list: '/v1/projects',
    like: (projectId: number) => `/v1/projects/like/${projectId}`,
  },
} as const;