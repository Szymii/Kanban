import { type Meta, type StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta = {
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "email@example.com",
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: true,
  },
};
