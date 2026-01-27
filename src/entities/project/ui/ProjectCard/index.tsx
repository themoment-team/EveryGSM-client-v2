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
    <div className="relative h-82.5 w-70 rounded-xl border border-[#2F2F2F] bg-[#22222280] p-6 backdrop-blur-lg">
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
        <div className="mb-4 flex items-start justify-between">
          <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[#2F2F2F]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${projectName ?? 'project'} thumbnail`}
                fill
                className="object-cover"
                sizes="56px"
              />
            ) : null}
          </div>
          {likeButton}
        </div>

        <p className="mb-2 text-[1.25rem]/[1.5rem] font-semibold text-white">{projectName}</p>
        <p className="mb-4 text-[.875rem]/[1rem] font-medium text-[#9A9A9A]">{teamName}</p>

        <p className="mb-4 line-clamp-2 text-[.75rem]/[1.125rem] font-medium text-[#9A9A9A]">
          {description}
        </p>

        <div className="mb-9 flex gap-1.5">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="flex h-6.5 items-center rounded-full bg-[#4F4F4F] px-2 text-[.75rem]/[.9rem] text-gray-300"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="flex h-6.5 items-center rounded-full bg-[#4F4F4F] px-2 text-[.75rem]/[.9rem] text-gray-300">
              +{tags.length - 3}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onDetailClick}
          className="ml-auto flex items-center gap-4 px-3 py-1.5"
        >
          <span className="text-[.75rem]/[1.125rem] font-medium text-white">
            프로젝트 상세 보기
          </span>
          <ArrowIcon />
        </button>
      </div>

      <div
        onMouseEnter={() => setIsCenterHover(true)}
        onMouseLeave={() => setIsCenterHover(false)}
        className={cn(
          'absolute inset-0 z-20 rounded-xl p-6 transition-opacity duration-300',
          isCenterHover ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[#2F2F2F]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${projectName ?? 'project'} thumbnail`}
                fill
                className="object-cover"
                sizes="56px"
              />
            ) : null}
          </div>

          <a
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-xl font-semibold text-white"
          >
            프로젝트 배포 URL 이동
            <ArrowIcon isLarge />
          </a>
        </div>
      </div>
    </div>
  );
};
