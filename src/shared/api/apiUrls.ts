<<<<<<< HEAD
export const API_URLS = {
  projects: {
    list: '/v1/projects',
    my: '/v2/projects/my',
    like: (projectId: number) => `/v1/projects/like/${projectId}`,
    rejected: '/v2/projects/my/rejected',
    pending: '/v2/projects/my/pending',
  },
=======
export const adminUrl = {
  getAdminRequests: () => '/api/v2/admin/requests',
  patchAdminRejectProject: (projectId: number) => `/api/v2/admin/reject/${projectId}`,
  patchAdminApproveProject: (projectId: number) => `/api/v2/admin/approve/${projectId}`,
} as const;

export const projectUrl = {
  deleteProjectLike: (projectId: number) => `/api/v2/projects/like/${projectId}`,
  getProjects: () => '/api/v2/projects',
  getMyProjects: () => '/api/v2/projects/my',
  getMyRejectedProjects: () => '/api/v2/projects/my/rejected',
  getMyPendingProjects: () => '/api/v2/projects/my/pending',
  postProjectRegistration: () => '/api/v2/projects/registration',
  postProjectLike: (projectId: number) => `/api/v2/projects/like/${projectId}`,
>>>>>>> dad6ac815fca909543cb5eb943b443cdcaa1fea5
} as const;
