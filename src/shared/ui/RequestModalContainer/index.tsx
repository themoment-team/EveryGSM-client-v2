'use client';

import { useRequestModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';
import { Header } from '@/widgets/header';

const RequestModalContainer = () => {
  const { isOpen, content } = useRequestModalStore();

  if (!isOpen || !content) return null;

  return (
    <div className={cn('fixed inset-0 overflow-y-auto bg-[#191919]')}>
      <Header />
      <div className={cn('min-h-screen')}>{content}</div>
    </div>
  );
};

export default RequestModalContainer;
