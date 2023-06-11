import Footer from ".";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "admin/Footer",
  component: Footer,
  parameters: {},
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {},
};
