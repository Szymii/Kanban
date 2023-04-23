import { type Meta, type StoryObj } from "@storybook/react";

import { BoardSelectionSection } from ".";

const meta = {
  component: BoardSelectionSection,
} satisfies Meta<typeof BoardSelectionSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    boards: [
      {
        slug: "PZP",
      },
    ],
  },
};
