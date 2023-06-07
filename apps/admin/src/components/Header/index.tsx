import type { FC } from "react";

import * as S from "./style";

interface HeaderProps {
  name?: string;
  userBelong?: "team" | "personal";
}

const Header: FC<HeaderProps> = ({ name, userBelong }) => {
  return <S.Header></S.Header>;
};

export default Header;
