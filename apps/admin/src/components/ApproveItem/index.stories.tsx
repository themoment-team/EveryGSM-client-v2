import ApproveItem from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/ApproveItem",
  component: ApproveItem,
  parameters: {},
} as Meta<typeof ApproveItem>;

type Story = StoryObj<typeof ApproveItem>;

export const Primary: Story = {
  args: {
    post: {
      projectId: 1,
      projectName: "STARBUCKS",
      projectDescription: "dssssd",
      projectUrl: "D",
      projectGithubUrl: ["ddfds", "ddfd"],
      creatorName: "준호 박",
      creatorDescription: "dd",
      creatorLogoUri: "dd",
      creatorGithubUrl: "gr",
      category: ["d", "d"],
      heartCount: 1,
      createdAt: "s",
      projectLogoUri: "https://example.com/path/to/image.png",
    },
  },
};
