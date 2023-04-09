import { type Meta, type StoryObj } from "@storybook/react";

import { LoginForm } from "./LoginForm";

const meta = {
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
