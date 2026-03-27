'use client';

import { ReactNode, useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';

import { useGetUserInfo, UserInfoResponseType } from '@/entities/auth';

interface AdminClientGuardProps {
  children: ReactNode;
  initialUserInfoData?: UserInfoResponseType;
}

const AdminClientGuard = ({ children, initialUserInfoData }: AdminClientGuardProps) => {
  const hasRedirectedRef = useRef(false);
  const router = useRouter();
  const { data: userInfoData, isPending: isUserInfoPending } = useGetUserInfo({
    initialData: initialUserInfoData,
    retry: false,
  });

  const accountRole = userInfoData?.data.role;
  const isAdminRole = accountRole === 'ADMIN';

  useEffect(() => {
    if (isUserInfoPending || isAdminRole || hasRedirectedRef.current) {
      return;
    }

    hasRedirectedRef.current = true;
    router.replace('/?error=forbidden-admin');
  }, [isUserInfoPending, isAdminRole, router]);

  if (!isAdminRole) {
    return null;
  }

  return children;
};

export default AdminClientGuard;
