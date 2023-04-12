import { type Meta, type StoryObj } from "@storybook/react";

import { LinkButton } from ".";

const meta = {
  component: LinkButton,
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "/login",
    children: "Go to login page",
  },
};
