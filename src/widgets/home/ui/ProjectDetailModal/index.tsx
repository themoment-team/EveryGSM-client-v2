'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { ArrowIcon, Close, Like } from '@/shared/assets';
import { cn } from '@/shared/utils';
import type { MainCardModel } from '@/views/home/model/types';

interface MainCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: MainCardModel;
}

const MainCardModal = ({ isOpen, onClose, data }: MainCardModalProps) => {
  const [liked, setLiked] = useState(data.isLiked);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  if (!isOpen) return null;

  return (
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6')}>
      <div
        className={cn(
          'relative h-235.5 w-250 overflow-hidden rounded-2xl bg-[#222222]/60 p-6 text-white shadow-2xl backdrop-blur-sm',
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className={cn('absolute top-6 right-6 text-gray-400 transition-colors hover:text-white')}
        >
          <Close />
        </button>

        <div className={cn('mt-8 mb-10')}>
          <div className={cn('relative mb-12 h-24 w-24 overflow-hidden rounded-full bg-[#2F2F2F]')}>
            {data.imageSrc ? (
              <Image
                src={data.imageSrc}
                alt={`${data.projectName ?? 'project'} thumbnail`}
                fill
                className={cn('object-cover')}
                sizes="100px"
              />
            ) : null}
          </div>

          <div className={cn('mb-2 flex items-center gap-3')}>
            <h2 className={cn('text-4xl font-bold')}>{data.projectName}</h2>
            <Like isLiked={liked} onClick={handleLikeToggle} />
          </div>

          <p className={cn('text-xl font-medium text-[#DDDDDD]')}>{data.teamName}</p>
        </div>

        <p
          className={cn('mb-4 max-w-[90%] text-[1rem] leading-relaxed font-medium text-[#DDDDDD]')}
        >
          {data.description}
        </p>

        <div className={cn('mb-12 flex gap-1.5')}>
          {data.tags.map((tag, index) => (
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
          {data.links.map((link, i) => (
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
          href={data.deployLink}
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
    </div>
  );
};

export default MainCardModal;
