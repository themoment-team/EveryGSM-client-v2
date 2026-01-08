'use client';
import { useEffect, useState } from 'react';

import { ArrowIcon, Like } from '@/shared/assets';
import { cn } from '@/shared/utils';

import MainCardModal from './projectdetail';

interface MainCardProps {
  imageSrc: string;
  projectName?: string;
  teamName?: string;
  description?: string;
  tags?: string[];
  isLiked?: boolean;
  status?: 'active' | 'pending' | 'completed';
  links?: { title: string; url: string }[]; // 깃허브 링크
  deployLink?: string; // 프젝 배포 링크
}

const MainCard = ({
  imageSrc,
  projectName,
  teamName,
  description,
  tags,
  links = [],
  deployLink = '',
  isLiked = false,
  status = 'active',
}: MainCardProps) => {
  const [isCenterHover, setIsCenterHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={cn('flex items-center justify-center p-4')}>
      <div
        className={cn(
          'relative h-82.25 w-70 rounded-xl border border-[#2F2F2F] bg-[#22222280] p-6 backdrop-blur-[18px]',
        )}
      >
        <div
          onMouseEnter={() => setIsCenterHover(true)}
          onMouseLeave={() => setIsCenterHover(false)}
          className="absolute top-1/2 left-1/2 z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <div
          className={cn(
            'transition-opacity duration-300',
            isCenterHover ? 'opacity-0' : 'opacity-100',
          )}
        >
          <div className={cn('mb-4 flex items-start justify-between')}>
            <div
              className={cn('flex h-14 w-14 items-center justify-center rounded-full bg-green-500')}
            ></div>

            <div className="relative">
              <Like />
            </div>
          </div>

          <p className={cn('mb-2 text-[1.25rem] font-semibold text-white')}>{projectName}</p>
          <p className={cn('mb-4 text-[0.875rem] font-medium text-gray-400')}>{teamName}</p>
          <p
            className={cn(
              'mb-4 line-clamp-2 overflow-hidden text-[0.75rem] font-medium text-ellipsis text-gray-400',
            )}
          >
            {description}
          </p>
          <div className="mb-9 flex gap-[0.38rem]">
            {tags?.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="flex h-6.5 items-center rounded-[62.5rem] bg-[#4F4F4F] px-2 text-[0.75rem] whitespace-nowrap text-gray-300"
              >
                {tag}
              </span>
            ))}
            {tags && tags.length > 3 && (
              <span className="flex h-6.5 items-center rounded-[62.5rem] bg-[#4F4F4F] px-2 text-[0.75rem] whitespace-nowrap text-gray-300">
                +{tags.length - 3}
              </span>
            )}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className={cn('relative z-20 mb-8 ml-auto flex items-center gap-4', 'group')}
          >
            <span
              className={cn(
                'absolute -inset-x-2 -inset-y-1',
                'rounded-xl bg-white/10',
                'opacity-0 transition-opacity duration-200',
                'group-hover:opacity-100',
              )}
            />

            <span className="relative z-10 text-[0.75rem] font-medium text-white">
              프로젝트 상세 보기
            </span>
            <ArrowIcon />
          </button>
        </div>

        <div
          className={cn(
            'absolute inset-0 rounded-xl p-6 transition-opacity duration-300',
            isCenterHover ? 'opacity-100' : 'opacity-0',
            isCenterHover ? 'pointer-events-auto' : 'pointer-events-none',
          )}
        >
          <div className="flex h-full flex-col items-center justify-center gap-6">
            <div
              className={cn('flex h-14 w-14 items-center justify-center rounded-full bg-green-500')}
            ></div>

            <button className="flex items-center gap-4 text-[1.25rem] font-semibold text-white">
              프로젝트 배포 URL 이동
              <ArrowIcon isLarge={true} />
            </button>
          </div>
        </div>
      </div>
      <MainCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={imageSrc}
        projectName={projectName}
        teamName={teamName}
        description={description}
        tags={tags}
        isLiked={isLiked}
        status={status}
        links={links}
        deployLink={deployLink}
      />
    </div>
  );
};

export default MainCard;
