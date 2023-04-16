import { type Meta, type StoryObj } from "@storybook/react";

import { RegisterForm } from "./RegisterForm";

const meta = {
  component: RegisterForm,
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
