import { type Meta, type StoryObj } from "@storybook/react";

import { TaskTimestamps } from "./TaskTimestamps";

const meta = {
  component: TaskTimestamps,
} satisfies Meta<typeof TaskTimestamps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
