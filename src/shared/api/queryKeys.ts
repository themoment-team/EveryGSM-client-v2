export const projectQueryKeys = {
  all: () => ['projects'] as const,
  getProjects: () => ['projects', 'list'] as const,
  getMyProjects: () => ['projects', 'my', 'list'] as const,
  getMyRejectedProjects: () => ['projects', 'my', 'rejected'] as const,
  getMyPendingProjects: () => ['projects', 'my', 'pending'] as const,
  postProjectRegistration: () => ['projects', 'create'] as const,
  postProjectLike: (projectId: number) => ['projects', 'like', projectId] as const,
} as const;

export const adminQueryKeys = {
  all: () => ['admin'] as const,
  getAdminRequests: () => ['admin', 'requests', 'list'] as const,
  patchAdminRejectProject: (projectId: number) => ['admin', 'reject', projectId] as const,
  patchAdminApproveProject: (projectId: number) => ['admin', 'approve', projectId] as const,
} as const;
