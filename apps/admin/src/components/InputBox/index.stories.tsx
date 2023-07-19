import InputBox from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/InputBox",
  component: InputBox,
  parameters: {},
} as Meta<typeof InputBox>;

type Story = StoryObj<typeof InputBox>;

export const Primary: Story = {
  args: {},
};
