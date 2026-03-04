'use client';

import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

const RequestModalContainer = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen || !content) return null;

  return (
    <div
      className={cn('fixed inset-0 flex items-center justify-center bg-[#191919] px-4')}
      onClick={closeModal}
    >
      <div
        className={cn('flex w-full items-center justify-center')}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
};

export default RequestModalContainer;
