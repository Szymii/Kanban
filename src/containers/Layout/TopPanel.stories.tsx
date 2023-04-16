import { type Meta, type StoryObj } from "@storybook/react";

import { TopPanel } from "./TopPanel";

const meta = {
  component: TopPanel,
} satisfies Meta<typeof TopPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John",
    surname: "Doe",
    profileUrl: "/",
  },
};
