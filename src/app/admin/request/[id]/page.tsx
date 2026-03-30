import { getAdminRequest } from '@/entities/project/index.server';
import { AdminRequestDetailPage } from '@/views/admin';

import { requireAdmin } from '../../_lib/requireAdmin';

const AdminProjectRequestDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  await requireAdmin();
  const { id } = await params;
  const initialProjectData = await getAdminRequest(Number(id));

  return <AdminRequestDetailPage initialProjectData={initialProjectData} />;
};

export default AdminProjectRequestDetail;
