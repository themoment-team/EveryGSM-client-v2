import type { FC } from "react";

import * as S from "./style";

interface HeaderProps {
  hasNotification: boolean;
  name: string;
}

const Header: FC<HeaderProps> = ({ hasNotification, name }) => {
  return <S.Header></S.Header>;
};

export default Header;
