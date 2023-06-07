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
    projectName: "STARBUCKS",
    creatorName: "준호 박",
    projectLogoUri: "https://pngimg.com/uploads/starbucks/starbucks_PNG3.png",
  },
};
