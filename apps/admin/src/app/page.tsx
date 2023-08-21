"use client";
import { Button } from "ui";
import * as S from "../../styles/page/page";
const postList = [
  {
    projectId: 0,
    projectName: "귀여운 하옹이",
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
    projectName: "이쁜 옙니",
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
    projectName: "잘생긴 이정우",
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
    projectName: "우윳빛깔 준호",
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
    projectName: "제우 <3 승제",
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
    projectName: "여심저격 장우..?",
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
        <Button />
      </S.MainContainer>
      <Footer />
    </div>
  );
}
