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
} as const;
