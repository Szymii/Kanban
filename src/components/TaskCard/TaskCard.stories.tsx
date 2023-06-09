import { type Meta, type StoryObj } from "@storybook/react";

import { TaskCard } from ".";

const meta = {
  component: TaskCard,
} satisfies Meta<typeof TaskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    number: 11,
    type: "STORY",
    boardSlug: "PZP",
    path: "/",
    assignedUser: {
      firstName: "Szymon",
      lastName: "Melzer",
    },
  },
};

export const LongText: Story = {
  args: {
    ...Default.args,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
};

export const WithoutAssignment: Story = {
  args: {
    ...Default.args,
    assignedUser: undefined,
  },
};
