import { type Meta, type StoryObj } from "@storybook/react";

import { BoardSection } from "./BoardSection";

const meta = {
  component: BoardSection,
} satisfies Meta<typeof BoardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    statuses: [],
    tasks: [],
    boardSlug: "PZP",
  },
};
