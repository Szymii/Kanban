import { type Meta, type StoryObj } from "@storybook/react";

import { ModalButton } from "./ModalButton";

const meta = {
  component: ModalButton,
} satisfies Meta<typeof ModalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  args: {
    variant: "confirm",
    modalId: "asd",
    children: "Click",
  },
};

export const Cancel: Story = {
  args: {
    ...Confirm.args,
    variant: "cancel",
  },
};

export const Disabled: Story = {
  args: {
    ...Confirm.args,
    disabled: true,
  },
};
