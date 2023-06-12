import URLInput from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/URLInput",
  component: URLInput,
  parameters: {},
} as Meta<typeof URLInput>;

type Story = StoryObj<typeof URLInput>;

export const Primary: Story = {
  args: {
    placeholder: "텍스트 입력해주세용",
  },
};
