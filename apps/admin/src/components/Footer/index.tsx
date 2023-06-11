import type { FC } from "react";
import * as S from "./style";
import Image from "next/image";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return <S.Footer>Copyright 2022. the moment All rights reserved.</S.Footer>;
};

export default Footer;
