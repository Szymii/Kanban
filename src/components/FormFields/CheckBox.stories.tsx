import { type Meta, type StoryObj } from "@storybook/react";
import { withRHF } from "src/utils/storybook";

import { CheckBox } from "./CheckBox";

const meta = {
  component: CheckBox,
  decorators: [withRHF()],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare vulputate 
            porta amet purus lectus. Sodales potenti massa aliquet quis. 
            Quam nibh sapien dolor, volutpat urna.`,
    name: "policy",
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
};
