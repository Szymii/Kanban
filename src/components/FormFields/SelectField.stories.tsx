import { type Meta, type StoryObj } from "@storybook/react";
import { withRHF } from "src/utils/storybook";

import { SelectField } from "./SelectField";

const meta = {
  component: SelectField,
  decorators: [withRHF()],
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Type",
    name: "Task type",
    required: true,
    options: [
      {
        label: "Error",
        value: "error",
      },
      {
        label: "Task",
        value: "task",
      },
      {
        label: "Story",
        value: "story",
      },
    ],
  },
};
