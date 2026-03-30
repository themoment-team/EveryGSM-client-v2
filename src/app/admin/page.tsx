import { getAdminRequests } from '@/entities/project/index.server';
import { AdminPage } from '@/views/admin';

import { requireAdmin } from './_lib/requireAdmin';

const Admin = async () => {
  await requireAdmin();
  const initialPendingProjectsData = await getAdminRequests();

  return <AdminPage initialPendingProjectsData={initialPendingProjectsData} />;
};

export default Admin;
