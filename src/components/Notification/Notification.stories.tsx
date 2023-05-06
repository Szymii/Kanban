import { type Meta, type StoryObj } from "@storybook/react";

import { Notification } from ".";

const meta = {
  component: Notification,
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "success",
    message: "Lorem ipsum",
  },
};
