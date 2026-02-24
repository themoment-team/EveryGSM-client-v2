'use client';

import React from 'react';

import { cn } from '@/shared/utils';

import type { CheckRequestStatusType } from '../model/types';

const CheckRequestStatus = () => {
  const [status, setStatus] = React.useState<CheckRequestStatusType>('pending');

  return (
    <div>
      <div className={cn('flex gap-6')}>
        <button
          onClick={() => {
            setStatus('rejected');
          }}
          className={cn(
            'flex cursor-pointer items-center rounded-[62.5rem] bg-[#333333] px-4 py-2 text-base font-medium',
          )}
        >
          요청상태:&nbsp;<span className={cn('text-[#FF7C7C]')}>거절</span>
        </button>
        <button
          onClick={() => {
            setStatus('pending');
          }}
          className={cn(
            'flex cursor-pointer items-center rounded-[62.5rem] bg-[#333333] px-4 py-2 text-base font-medium',
          )}
        >
          요청상태:&nbsp;<span>확인 중</span>
        </button>
      </div>
    </div>
  );
};

export default CheckRequestStatus;
