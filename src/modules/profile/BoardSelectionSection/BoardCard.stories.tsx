import { type Meta, type StoryObj } from "@storybook/react";

import { BoardCard } from "./BoardCard";

const meta = {
  component: BoardCard,
} satisfies Meta<typeof BoardCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
