import { type Meta, type StoryObj } from "@storybook/react";

import { TaskHeader } from "./TaskHeader";

const meta = {
  component: TaskHeader,
} satisfies Meta<typeof TaskHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    taskTitle: "Task Name may be a little longer then it should",
  },
};