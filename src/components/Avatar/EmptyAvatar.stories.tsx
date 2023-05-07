import { type Meta, type StoryObj } from "@storybook/react";

import { EmptyAvatar } from "./EmptyAvatar";

const meta = {
  component: EmptyAvatar,
} satisfies Meta<typeof EmptyAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
