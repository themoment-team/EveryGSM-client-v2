"use client";

import GlobalStyle from "common/styles/GlobalStyle";

import { css } from "@emotion/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>Admin</title>
        <meta name="description" content="admin" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body
        css={css`
          background-color: "#A7A7A7";
        `}
      >
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
