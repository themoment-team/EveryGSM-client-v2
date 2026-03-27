'use client';

import { Toaster } from 'sonner';

import { cn } from '@/shared/utils';

const AppToaster = () => {
  return (
    <Toaster
      position="top-right"
      style={{ top: '80px' }}
      closeButton
      expand={false}
      richColors={false}
      toastOptions={{
        duration: 4500,
        style: {
          background: '#1b1b1b',
          border: '1px solid #2F2F2F',
          color: '#ff4d4f',
          fontWeight: 600,
        },
        classNames: {
          toast: cn('relative pr-10'),
          icon: cn('text-[#ff4d4f]'),
          closeButton: cn(
            '!left-auto !right-[-4px] !top-2',
            '!bg-transparent !border-none !shadow-none',
            '!text-[#666666] hover:!bg-transparent',
          ),
        },
      }}
    />
  );
};

export default AppToaster;
