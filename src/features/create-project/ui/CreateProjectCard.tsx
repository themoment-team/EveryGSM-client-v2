'use client';

import { useRouter } from 'next/navigation';

import { PlusIcon } from '@/shared/assets';
import { cn } from '@/shared/utils';

import { PROJECT_CREATE_ROUTE } from '../model/routes';

interface CreateProjectCardProps {
  className?: string;
}

const CreateProjectCard = ({ className }: CreateProjectCardProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(PROJECT_CREATE_ROUTE)}
      className={cn(
        'group relative flex h-82.5 w-full max-w-70 flex-col items-center justify-center gap-6 rounded-xl',
        'bg-[rgba(34,34,34,0.50)] p-6 shadow-[inset_0_0_0_1px_#2F2F2F]',
        'transition-colors duration-150 hover:bg-[rgba(39,39,39,1)]',
        className,
      )}
    >
      <span className="text-[1.25rem] leading-6 font-semibold text-[#9A9A9A] transition-colors duration-150 group-hover:text-white">
        프로젝트 등록
      </span>

      <PlusIcon className="text-[#9A9A9A] transition-colors duration-150 group-hover:text-white" />
    </button>
  );
};

export default CreateProjectCard;
