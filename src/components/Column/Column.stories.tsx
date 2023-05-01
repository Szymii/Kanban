import { type Meta, type StoryObj } from "@storybook/react";

import { Column } from ".";
import { TaskCard } from "../TaskCard";

const meta = {
  component: Column,
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "TO DO",
    children: (
      <TaskCard
        boardSlug="PZP"
        number={199}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        type="STORY"
        path="/"
      />
    ),
  },
};

export const WithAction: Story = {
  args: {
    name: "TO DO",
    action: () => {
      return;
    },
    children: (
      <TaskCard
        boardSlug="PZP"
        number={199}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        type="STORY"
        path="/"
      />
    ),
  },
};

export const Vertical: Story = {
  args: {
    name: "TO DO",
    children: (
      <TaskCard
        boardSlug="PZP"
        number={199}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        type="STORY"
        variant="inline"
        path="/"
      />
    ),
  },
};
