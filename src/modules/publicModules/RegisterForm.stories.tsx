import { type Meta, type StoryObj } from "@storybook/react";
import { withToasts } from "src/containers/Toasts";
import { withTRPC } from "src/utils/storybook";

import { RegisterForm } from "./RegisterForm";

const meta = {
  component: RegisterForm,
  decorators: [withToasts(), withTRPC()],
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
