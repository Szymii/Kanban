import { type Meta, type StoryObj } from "@storybook/react";

import { Avatar } from ".";

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John",
    surname: "Doe",
  },
};

export const WithPicture: Story = {
  args: {
    name: "John",
    surname: "Doe",
    avatarUrl: "https://bit.ly/kent-c-dodds",
  },
};
