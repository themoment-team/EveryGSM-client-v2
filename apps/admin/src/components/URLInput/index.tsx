"use client";
import type { FC } from "react";
import * as S from "./style";
import Image from "next/image";
import { useState } from "react";
import { Input } from "../../components";
import { css } from "@emotion/react";
import { PlusIcon, Trashcan } from "../../assets";
interface URLInputProps {
  placeholder: string;
}

const URLInput: FC<URLInputProps> = ({ placeholder }) => {
  const [inputBox, setInputBox] = useState(0);
  const MAX_INPUTS = 3;

  const handleAddInput = () => {
    if (inputBox < MAX_INPUTS) {
      setInputBox((prevCount) => prevCount + 1);
    }
  };
  const handleRemoveInput = () => {
    if (inputBox > 0) {
      setInputBox((prevCount) => prevCount - 1);
    }
  };
  return (
    <S.URLInputBox>
      <S.Title>레포지토리 URL</S.Title>
      <Input placeholder="프로젝트 깃허브 레포지토리 링크를 작성해주세요. (최대 4개)" />
      {[...Array(inputBox)].map((_, index) => (
        <S.InputWrap key={index}>
          <Input placeholder="프로젝트 깃허브 레포지토리 링크를 작성해주세요. (최대 4개)" />
          <S.RemoveIcon onClick={handleRemoveInput}>
            <Trashcan />
          </S.RemoveIcon>
        </S.InputWrap>
      ))}
      {inputBox === 3 ? (
        <></>
      ) : (
        <S.AddInput onClick={handleAddInput}>
          <PlusIcon />
        </S.AddInput>
      )}
    </S.URLInputBox>
  );
};

export default URLInput;
