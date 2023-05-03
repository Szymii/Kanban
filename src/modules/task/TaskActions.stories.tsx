import { type Meta, type StoryObj } from "@storybook/react";

import { TaskActions } from "./TaskActions";

const meta = {
  component: TaskActions,
} satisfies Meta<typeof TaskActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
