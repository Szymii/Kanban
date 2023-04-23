import { type Meta, type StoryObj } from "@storybook/react";

import { CreateBoardModal } from "./CreateBoardModal";

const meta = {
  component: CreateBoardModal,
} satisfies Meta<typeof CreateBoardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
