import type { Task } from "@prisma/client";
import { type Meta, type StoryObj } from "@storybook/react";

import { BacklogSection } from "./BacklogSection";

const meta = {
  component: BacklogSection,
} satisfies Meta<typeof BacklogSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tasks: [
      {
        id: "123",
        type: "STORY",
        number: 223,
        title: "Lorem",
      } as Task,
    ],
    boardSlug: "PZP",
  },
};
