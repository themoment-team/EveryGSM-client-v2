import Input from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Input",
  component: Input,
  parameters: {},
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "텍스트 입력해주세용",
  },
};
