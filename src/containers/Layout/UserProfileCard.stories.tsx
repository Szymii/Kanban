import { type Meta, type StoryObj } from "@storybook/react";

import { UserProfileCard } from "./UserProfileCard";

const meta = {
  component: UserProfileCard,
} satisfies Meta<typeof UserProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John",
    surname: "Doe",
    profileUrl: "/",
  },
};
