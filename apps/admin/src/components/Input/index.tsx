import type { FC } from "react";
import * as S from "./style";
import Image from "next/image";

interface InputProps {
  placeholder: string;
}

const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <div>
      <S.Input placeholder={placeholder} />
    </div>
  );
};

export default Input;
