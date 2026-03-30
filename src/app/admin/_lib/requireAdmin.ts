import { redirect } from 'next/navigation';

import { getMyInfo } from '@/entities/user/index.server';

export const requireAdmin = async () => {
  const userResponse = await getMyInfo();

  if (userResponse?.data.role !== 'ADMIN') {
    redirect('/');
  }
};
