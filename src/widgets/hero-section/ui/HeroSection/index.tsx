import { ReactNode } from 'react';

import { cn } from '@/shared/utils';

interface HeroSectionProps {
  title: ReactNode; // 하이라이팅이 필요한 텍스트가 포함될 수 있으므로 ReactNode로 타입 지정
  description?: ReactNode; // ReactNode는 string도 기본적으로 포함
}

const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <div className={cn('flex flex-col gap-6')}>
      <h1
        className={cn(
          'text-4xl leading-[2.7rem] font-bold tracking-[-0.045rem] whitespace-pre-line text-white',
        )}
      >
        {title}
      </h1>
      {description && (
        <p
          className={cn(
            'text-xl leading-7 font-normal tracking-[-.025rem] whitespace-pre-line text-[#666]',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default HeroSection;
