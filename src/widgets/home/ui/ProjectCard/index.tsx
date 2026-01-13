'use client';

import { useState } from 'react';

import Image from 'next/image';

import { ArrowIcon, Close, Like } from '@/shared/assets';
import { cn } from '@/shared/utils';
import type { MainCardModel } from '@/views/home/model/types';

interface MainCardProps {
  data: MainCardModel;
}

const MainCard = ({ data }: MainCardProps) => {
  const { imageSrc, projectName, teamName, description, tags, isLiked, deployLink, links } = data;

  const [isCenterHover, setIsCenterHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(isLiked);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="relative h-80 w-72 rounded-xl border border-[#2F2F2F] bg-[#22222280] p-6 backdrop-blur-lg">
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
                    unoptimized
                  />
                ) : null}
              </div>
              <Like isLiked={liked} onClick={handleLikeToggle} />
            </div>

            <p className="mb-2 text-xl font-semibold text-white">{projectName}</p>
            <p className="mb-4 text-sm font-medium text-gray-400">{teamName}</p>

            <p className="mb-4 line-clamp-2 text-xs font-medium text-gray-400">{description}</p>

            <div className="mb-9 flex gap-1.5">
              {tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="flex h-6 items-center rounded-full bg-[#4F4F4F] px-2 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="flex h-6 items-center rounded-full bg-[#4F4F4F] px-2 text-xs text-gray-300">
                  +{tags.length - 3}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group relative z-20 mb-8 ml-auto flex items-center gap-4"
            >
              <span className="absolute -inset-x-2 -inset-y-1 rounded-xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10 text-xs font-medium text-white">
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
      </div>

      {isModalOpen && (
        <div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6')}>
          <div
            className={cn(
              'relative h-235.5 w-250 overflow-hidden rounded-2xl bg-[#222222]/60 p-6 text-white shadow-2xl backdrop-blur-sm',
            )}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className={cn(
                'absolute top-6 right-6 text-gray-400 transition-colors hover:text-white',
              )}
            >
              <Close />
            </button>

            <div className={cn('mt-8 mb-10')}>
              <div
                className={cn('relative mb-12 h-24 w-24 overflow-hidden rounded-full bg-[#2F2F2F]')}
              >
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
                <h2 className={cn('text-4xl font-bold')}>{projectName}</h2>
                <Like isLiked={liked} onClick={handleLikeToggle} />
              </div>

              <p className={cn('text-xl font-medium text-[#DDDDDD]')}>{teamName}</p>
            </div>

            <p
              className={cn(
                'mb-4 max-w-[90%] text-[1rem] leading-relaxed font-medium text-[#DDDDDD]',
              )}
            >
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
              <span className={cn('text-[1rem] font-medium text-white')}>
                프로젝트 배포 URL 이동
              </span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MainCard;
