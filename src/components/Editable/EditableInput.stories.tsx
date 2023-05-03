import { type Meta, type StoryObj } from "@storybook/react";

import { EditableInput } from "./EditableInput";

const meta = {
  component: EditableInput,
} satisfies Meta<typeof EditableInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultText: "Task Name may be a little longer then it should",
  },
};
