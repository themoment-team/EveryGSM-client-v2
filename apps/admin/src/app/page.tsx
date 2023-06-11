"use client";
import * as S from "../../styles/page/page";
const postList = [
  {
    projectId: 0,
    projectName: "ProjectName",
    projectDescription: "ProjectDescription",
    projectUrl: "ProjectUrl",
    projectLogoUri: "https://pngimg.com/uploads/starbucks/starbucks_PNG3.png",
    projectGithubUrl: [
      "ProjectGithubUrl1",
      "ProjectGithubUrl2",
      "ProjectGithubUrl3",
    ],
    creatorName: "CreatorName",
    creatorDescription: "CreatorDescription",
    creatorLogoUri: "CreatorLogoUri",
    creatorGithubUrl: "CreatorUrl",
    category: ["React", "NestJS"],
    heartCount: 0,
    createdAt: "2023-06-06T13:34:43.935487",
  },
  {
    projectId: 1,
    projectName: "ProjectName",
    projectDescription: "ProjectDescription",
    projectUrl: "ProjectUrl",
    projectLogoUri: "https://pngimg.com/uploads/starbucks/starbucks_PNG3.png",
    projectGithubUrl: [
      "ProjectGithubUrl1",
      "ProjectGithubUrl2",
      "ProjectGithubUrl3",
    ],
    creatorName: "CreatorName",
    creatorDescription: "CreatorDescription",
    creatorLogoUri: "CreatorLogoUri",
    creatorGithubUrl: "CreatorUrl",
    category: ["React", "NestJS"],
    heartCount: 0,
    createdAt: "2023-06-06T13:34:43.935487",
  },
];

import { Header, Footer, ApproveItemList } from "../components";
export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#EDEDED", width: "100vw", height: "100vh" }}
    >
      <Header />
      <S.MainContainer>
        <S.ContentBox>
          <S.Unapprove>등록요청된 프로젝트</S.Unapprove>
          <ApproveItemList postList={postList} />
        </S.ContentBox>
      </S.MainContainer>
      <Footer />
    </div>
  );
}
