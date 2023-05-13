import { type Meta, type StoryObj } from "@storybook/react";

import { TaskStatusSelect } from "./TaskStatusSelect";

const meta = {
  component: TaskStatusSelect,
} satisfies Meta<typeof TaskStatusSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedStatusId: "123",
    statuses: [
      {
        boardId: "12334",
        id: "321",
        name: "Status 1",
      },
      {
        boardId: "12334",
        id: "123",
        name: "Status 2",
      },
    ],
  },
};
