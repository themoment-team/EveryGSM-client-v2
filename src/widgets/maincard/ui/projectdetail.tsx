'use client';
import React from 'react';

import { ArrowIcon, Close, Like } from '@/shared/assets';
import { cn } from '@/shared/utils';

interface MainCardProps {
  isOpen: boolean;
  onClose: () => void;
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

const MainCardModal = ({
  imageSrc,
  projectName,
  teamName,
  description,
  tags,
  isLiked = false,
  status = 'active',
  isOpen,
  onClose,
  links = [],
  deployLink = '',
}: MainCardProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center border border-[#2F2F2F] p-6">
      <div className="relative h-235.5 w-250 overflow-hidden rounded-2xl bg-[#222222E5] p-6 text-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 transition-colors hover:text-white"
        >
          <Close />
        </button>

        <div className="mt-8 mb-10">
          <div className="mb-12 h-25 w-25 overflow-hidden rounded-full bg-[#2F2F2F]">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={`${projectName ?? 'project'} thumbnail`}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <div className="mb-2 flex items-center gap-3">
            <h2 className="text-[2.25rem] font-bold">{projectName}</h2>
            <Like />
          </div>

          <p className="text-[1.25rem] font-medium text-[#DDDDDD]">{teamName}</p>
        </div>

        <p className="mb-4 max-w-[90%] text-[1rem] leading-relaxed font-medium text-[#DDDDDD]">
          {description}
        </p>

        <div className="mb-12 flex gap-[0.38rem]">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="flex h-6.5 items-center rounded-[62.5rem] bg-[#4F4F4F] px-2 text-[1rem] whitespace-nowrap text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-12 space-y-1">
          {links?.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg p-4 transition-all hover:bg-[#2A2A2A]"
            >
              <span className="text-[1rem] text-white">{link.title}</span>
              <ArrowIcon />
            </a>
          ))}
        </div>

        <a
          href={deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-lg p-4 transition-all hover:bg-[#2A2A2A]"
        >
          <span className="text-[1rem] font-medium text-white">프로젝트 배포 URL 이동</span>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default MainCardModal;
