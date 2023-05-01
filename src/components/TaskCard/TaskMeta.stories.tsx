import { type Meta, type StoryObj } from "@storybook/react";

import { TaskMeta } from "./TaskMeta";

const meta = {
  component: TaskMeta,
  decorators: [
    (Story) => (
      <div className="flex p-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TaskMeta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
    number: 11,
    boardSlug: "PZP",
    type: "STORY",
  },
};

export const Bug: Story = {
  args: {
    ...Story.args,
    type: "BUG",
  },
};

export const Task: Story = {
  args: {
    ...Story.args,
    type: "TASK",
  },
};
