import ApplyBtn from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/ApplyBtn",
  component: ApplyBtn,
  parameters: {},
} as Meta<typeof ApplyBtn>;

type Story = StoryObj<typeof ApplyBtn>;

export const Primary: Story = {
  args: {},
};
