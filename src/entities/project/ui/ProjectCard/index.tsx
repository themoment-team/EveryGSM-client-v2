'use client';

import { useState } from 'react';

import Image from 'next/image';

import { ArrowIcon } from '@/shared/assets';
import { cn } from '@/shared/utils';

import type { MainCardModel } from '../../model/types';

interface ProjectCardProps {
  data: MainCardModel;
  likeButton?: React.ReactNode;
  onDetailClick?: () => void;
}

export const ProjectCard = ({ data, likeButton, onDetailClick }: ProjectCardProps) => {
  const { imageSrc, projectName, teamName, description, tags, deployLink } = data;

  const [isCenterHover, setIsCenterHover] = useState(false);

  return (
    <div
      className={cn(
        'relative flex h-82.5 w-full max-w-70 flex-col justify-between rounded-xl bg-[rgba(34,34,34,0.50)] p-6 shadow-[inset_0_0_0_1px_#2F2F2F] backdrop-blur-[1.125rem]',
      )}
    >
      <div
        onMouseEnter={() => setIsCenterHover(true)}
        onMouseLeave={() => setIsCenterHover(false)}
        className={cn(
          'absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-xl bg-[rgba(39,39,39,1)] p-6 backdrop-blur-[1.125rem] transition-opacity duration-300',
          isCenterHover ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <Image
          src={imageSrc}
          alt={projectName}
          width={56}
          height={56}
          className={cn('rounded-full object-cover')}
        />
        <a
          href={deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex cursor-pointer items-center gap-x-4 text-xl leading-6 font-semibold text-white',
          )}
        >
          프로젝트 배포 URL 이동
          <ArrowIcon isLarge />
        </a>
      </div>

      <div>
        <div className={cn('mb-4 flex justify-between')}>
          <Image
            src={imageSrc}
            alt={projectName}
            width={56}
            height={56}
            className={cn('rounded-full object-cover')}
          />
          {likeButton}
        </div>
        <div
          onMouseEnter={() => setIsCenterHover(true)}
          onMouseLeave={() => setIsCenterHover(false)}
          className={cn('flex flex-col gap-y-4')}
        >
          <div className={cn('flex flex-col gap-y-2')}>
            <h3 className={cn('text-xl leading-6 font-semibold text-white')}>{projectName}</h3>
            <p className={cn('text-sm leading-4.25 font-medium text-[#9A9A9A]')}>{teamName}</p>
          </div>
          <div className={cn('line-clamp-2 h-9 text-xs leading-4.5 font-medium text-[#9A9A9A]')}>
            {description}
          </div>
          <div className={cn('flex h-6.5 flex-wrap gap-x-1.5 overflow-hidden')}>
            {/* TODO: 태그가 많을 때 +n 표시 */}
            {tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  'rounded-full bg-[#4F4F4F] px-2 py-1.5 text-xs leading-[.9rem] font-medium text-white',
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className={cn(
          'flex cursor-pointer justify-end rounded-xl px-3 py-1.5 hover:bg-[rgba(51,51,51,0.5)]',
        )}
        onClick={onDetailClick}
      >
        <button
          className={cn(
            'flex cursor-pointer items-center gap-x-4 text-xs leading-4.5 font-medium text-white',
          )}
        >
          프로젝트 상세 보기
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
