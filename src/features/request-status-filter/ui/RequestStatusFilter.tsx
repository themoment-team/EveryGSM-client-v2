import { cn } from '@/shared/utils';

import type { RequestStatusFilterType } from '../model/types';

interface RequestStatusFilterProps {
  selectedStatus: RequestStatusFilterType;
  onChange: (status: RequestStatusFilterType) => void;
}

const RequestStatusFilter = ({ selectedStatus, onChange }: RequestStatusFilterProps) => {
  const isRejectedSelected = selectedStatus === 'REJECTED';

  return (
    <div className={cn('flex gap-x-6')}>
      <button
        type="button"
        onClick={() => onChange('REJECTED')}
        className={cn(
          'rounded-full px-4 py-2 text-base leading-6 font-medium whitespace-nowrap',
          isRejectedSelected ? 'bg-[#2B2B2B] text-[#FFFFFF]' : 'text-[#B0B0B0]',
        )}
      >
        요청 상태: <span className={cn('text-[#FF7C7C]')}>거절</span>
      </button>
      <button
        type="button"
        onClick={() => onChange('PENDING')}
        className={cn(
          'rounded-full px-4 py-2 text-base leading-6 font-medium whitespace-nowrap',
          !isRejectedSelected ? 'bg-[#2B2B2B] text-[#FFFFFF]' : 'text-[#B0B0B0]',
        )}
      >
        요청 상태: 확인 중
      </button>
    </div>
  );
};

export default RequestStatusFilter;
