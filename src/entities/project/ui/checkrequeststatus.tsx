'use client';

import { cn } from '@/shared/utils';

import type { CheckRequestStatusType } from '../model/types';

interface CheckRequestStatusProps {
  status: CheckRequestStatusType;
  onStatusChange: (status: CheckRequestStatusType) => void;
}

const CheckRequestStatus = ({ status, onStatusChange }: CheckRequestStatusProps) => {
  return (
    <div>
      <div className={cn('flex gap-6')}>
        <button
          onClick={() => onStatusChange('rejected')}
          className={cn(
            'flex cursor-pointer items-center rounded-[62.5rem] px-4 py-2 text-base font-medium',
            status === 'rejected' ? 'bg-[#333333]' : 'text-[#B0B0B0]',
          )}
        >
          요청상태:&nbsp;<span className={cn('text-[#FF7C7C]')}>거절</span>
        </button>
        <button
          onClick={() => onStatusChange('pending')}
          className={cn(
            'flex cursor-pointer items-center rounded-[62.5rem] px-4 py-2 text-base font-medium',
            status === 'pending' ? 'bg-[#333333]' : 'text-[#B0B0B0]',
          )}
        >
          요청상태:&nbsp;<span>확인 중</span>
        </button>
      </div>
    </div>
  );
};

export default CheckRequestStatus;
