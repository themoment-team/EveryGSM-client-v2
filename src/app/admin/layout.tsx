import { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { getUserInfo } from '@/entities/auth/index.server';
import { AdminClientGuard } from '@/views/admin';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = async ({ children }: AdminLayoutProps) => {
  const [initialUserInfoData] = await Promise.all([getUserInfo()]);
  const accountRole = initialUserInfoData?.data.role;
  const isAdminRole = accountRole === 'ADMIN';

  if (!isAdminRole) {
    redirect('/?error=forbidden-admin');
  }

  return <AdminClientGuard initialUserInfoData={initialUserInfoData}>{children}</AdminClientGuard>;
};

export default AdminLayout;
