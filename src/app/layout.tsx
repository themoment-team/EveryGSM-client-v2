import type { Metadata } from 'next';

import { TanStackProvider } from '@/shared/lib';
import { pretendard } from '@/shared/styles';
import '@/shared/styles/globals.css';
import { Header } from '@/widgets/header';

export const metadata: Metadata = {
  title: 'EveryGSM',
  description: '광주소프트웨어마이스터고등학교의 모든 프로젝트를 한곳에',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
