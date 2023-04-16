import { type Meta, type StoryObj } from "@storybook/react";

import { Logo } from ".";

const meta = {
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
  },
};
