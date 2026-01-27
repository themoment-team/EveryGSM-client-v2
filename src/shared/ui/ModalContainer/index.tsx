'use client';

import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

export const ModalContainer = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen || !content) return null;

  return (
    <div
      className={cn('fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.20)] backdrop-blur-sm')}
      onClick={closeModal}
    >
      <div onClick={(e) => e.stopPropagation()}>{content}</div>
    </div>
  );
};
