import { type Meta, type StoryObj } from "@storybook/react";

import { Error } from ".";

const meta = {
  component: Error,
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 324,
    text: "Back to hame page",
    action: () => {
      return;
    },
  },
};
