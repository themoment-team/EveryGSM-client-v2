'use client';

import Image from 'next/image';

import { ArrowIcon, CloseIcon } from '@/shared/assets';
import { useModalStore } from '@/shared/stores';
import { cn } from '@/shared/utils';

import type { MainCardModel } from '../../model/types';

interface ProjectDetailModalProps {
  data: MainCardModel;
  modalLikeButton?: React.ReactNode;
}

export const ProjectDetailModal = ({ data, modalLikeButton }: ProjectDetailModalProps) => {
  const { imageSrc, projectName, teamName, description, tags, deployLink, links } = data;
  const { closeModal } = useModalStore();

  return (
    <div
      className={cn(
        'relative w-250 rounded-xl border border-[#2F2F2F] bg-[rgba(34,34,34,0.90)] p-6 backdrop-blur-sm',
      )}
    >
      <button
        type="button"
        onClick={closeModal}
        className={cn('absolute top-6 right-6 text-gray-400 transition-colors hover:text-white')}
      >
        <CloseIcon />
      </button>

      <div className={cn('mt-8 mb-10')}>
        <div className={cn('relative mb-12 h-24 w-24 overflow-hidden rounded-full bg-[#2F2F2F]')}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${projectName ?? 'project'} thumbnail`}
              fill
              className={cn('object-cover')}
              sizes="100px"
            />
          ) : null}
        </div>

        <div className={cn('mb-2 flex items-center gap-3')}>
          <h2 className={cn('text-4xl font-bold text-white')}>{projectName}</h2>
          {modalLikeButton}
        </div>

        <p className={cn('text-xl font-medium text-[#DDDDDD]')}>{teamName}</p>
      </div>

      <p className={cn('mb-4 max-w-[90%] text-[1rem] leading-relaxed font-medium text-[#DDDDDD]')}>
        {description}
      </p>

      <div className={cn('mb-12 flex gap-1.5')}>
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className={cn(
              'flex h-6 items-center rounded-full bg-[#4F4F4F] px-2 text-base whitespace-nowrap text-gray-300',
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={cn('mb-12 space-y-1')}>
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'group flex items-center justify-between rounded-lg p-4 transition-all hover:bg-[#2A2A2A]',
            )}
          >
            <span className={cn('text-[1rem] text-white')}>{link.title}</span>
            <ArrowIcon />
          </a>
        ))}
      </div>

      <a
        href={deployLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group flex items-center justify-between rounded-lg p-4 transition-all hover:bg-[#2A2A2A]',
        )}
      >
        <span className={cn('text-[1rem] font-medium text-white')}>프로젝트 배포 URL 이동</span>
        <ArrowIcon />
      </a>
    </div>
  );
};
