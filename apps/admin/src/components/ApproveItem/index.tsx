import type { FC } from "react";
import * as S from "./style";
import Image from "next/image";
import * as I from "../../assets";

interface ApproveItemProps {
  projectName?: string;
  projectLogoUri?: any;
  creatorName?: string;
}

const ApproveItem: FC<ApproveItemProps> = ({
  projectName,
  projectLogoUri,
  creatorName,
}) => {
  return (
    <S.ApproveItem>
      <S.ProjectWrap>
        <Image src={projectLogoUri} alt="logouri" width={46} height={46} />
        <S.ProjectDescWrap>
          <S.Title>{projectName}</S.Title>
          <S.Creator>{creatorName}</S.Creator>
        </S.ProjectDescWrap>
      </S.ProjectWrap>
      <S.Approve>
        <button className="approve">승인</button>
        <I.VerticalBarIcon />
        <button className="refuse">거절</button>
      </S.Approve>
    </S.ApproveItem>
  );
};

export default ApproveItem;
