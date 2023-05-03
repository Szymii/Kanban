import { type Meta, type StoryObj } from "@storybook/react";

import { TaskContent } from "./TaskContent";

const meta = {
  component: TaskContent,
} satisfies Meta<typeof TaskContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
