import ApproveItemList from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/ApproveItemList",
  component: ApproveItemList,
  parameters: {},
} as Meta<typeof ApproveItemList>;

type Story = StoryObj<typeof ApproveItemList>;

const postList = [
  {
    projectId: 1,
    projectName: "ProjectName",
    projectDescription: "ProjectDescription",
    projectUrl: "ProjectUrl",
    projectLogoUri: "/path/to/image.png",
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
    projectId: 2,
    projectName: "귀여운",
    projectDescription: "ProjectDescription",
    projectUrl: "ProjectUrl",
    projectLogoUri: "/path/to/image.png",
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

export const Primary: Story = {
  args: {
    postList: postList,
  },
};
