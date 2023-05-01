import type { Status, Task } from "@prisma/client";
import { type Meta, type StoryObj } from "@storybook/react";

import { BoardSection } from "./BoardSection";

const meta = {
  component: BoardSection,
} satisfies Meta<typeof BoardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    statuses: [
      { id: "1", name: "TO DO" } as Status,
      { id: "2", name: "Done" } as Status,
    ],
    tasks: [
      {
        statusId: "1",
        title: "Lorem ipsum",
        number: 11,
        type: "TASK",
      } as Task,
      {
        statusId: "2",
        title: "Lorem ipsum",
        number: 11,
        type: "BUG",
      } as Task,
      {
        statusId: "1",
        title: "Lorem ipsum",
        number: 11,
        type: "BUG",
      } as Task,
    ],
    boardSlug: "PZP",
  },
};
