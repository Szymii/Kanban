import { type Meta, type StoryObj } from "@storybook/react";
import { withRHF } from "src/utils/storybook";

import { TextAreaField } from "./TextAreaField";

const meta = {
  component: TextAreaField,
  decorators: [withRHF()],
} satisfies Meta<typeof TextAreaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Description",
    name: "description",
  },
};
