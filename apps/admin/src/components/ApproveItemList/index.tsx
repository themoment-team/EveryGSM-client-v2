import type { FC } from "react";
import * as S from "./style";
import ApproveItem from "../ApproveItem";
import { Contentstype } from "../../interface/Approve";

interface ApproveItemListProps {
  postList?: Contentstype[];
}

const ApproveItemList: FC<ApproveItemListProps> = ({ postList }) => {
  return (
    <S.ApproveItemList>
      {postList?.map((post, key) => (
        <ApproveItem key={key} post={post} />
      ))}
    </S.ApproveItemList>
  );
};

export default ApproveItemList;
