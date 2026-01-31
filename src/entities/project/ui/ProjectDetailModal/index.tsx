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
        'flex w-full max-w-250 flex-col gap-12 rounded-xl bg-[rgba(34,34,34,0.90)] p-6 shadow-[inset_0_0_0_1px_#2F2F2F] backdrop-blur-sm',
      )}
    >
      <div className={cn('flex items-start justify-between')}>
        <Image
          src={imageSrc}
          alt={projectName}
          width={100}
          height={100}
          className={cn('rounded-full object-cover')}
        />
        <button onClick={closeModal} className={cn('cursor-pointer')}>
          <CloseIcon />
        </button>
      </div>
      <div className={cn('flex flex-col gap-y-2')}>
        <div className={cn('flex items-center gap-x-6')}>
          <h3 className={cn('text-4xl leading-10.75 font-bold text-white')}>{projectName}</h3>
          {modalLikeButton}
        </div>
        <p className={cn('text-xl leading-6 font-medium text-[#DDDDDD]')}>{teamName}</p>
      </div>
      <div className={cn('flex flex-col gap-y-4')}>
        <p className={cn('text-base leading-6 font-medium text-[#DDDDDD]')}>{description}</p>
        <div className={cn('flex flex-wrap gap-x-2')}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                'rounded-full bg-[#4F4F4F] px-3 py-1.5 text-base leading-[1.2rem] font-normal text-[#DDDDDD]',
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex cursor-pointer items-center justify-between rounded-xl px-3 py-1.5 text-base leading-6 font-medium text-white duration-100 hover:bg-[#444444]',
            )}
          >
            {link.title}
            <ArrowIcon />
          </a>
        ))}
      </div>
      <a
        href={deployLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex cursor-pointer items-center justify-between rounded-xl px-3 py-1.5 text-base leading-6 font-medium text-white duration-100 hover:bg-[#444444]',
        )}
      >
        배포링크 URL 이동
        <ArrowIcon />
      </a>
    </div>
  );
};
