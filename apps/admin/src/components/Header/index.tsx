import type { FC } from "react";
import * as S from "./style";
import Image from "next/image";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <S.Header>
      <S.Logo>
        <Image src="/Logo.png" alt="" width="14" height="20" />
        EveryGSM
      </S.Logo>
    </S.Header>
  );
};

export default Header;
