import { type Meta, type StoryObj } from "@storybook/react";

import { UserSelect } from ".";

const meta = {
  component: UserSelect,
} satisfies Meta<typeof UserSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedUserId: "123",
    users: [
      { id: "123", firstName: "Szymon", lastName: "Melzer" },
      { id: "321", firstName: "Piotr", lastName: "Maciejczak" },
    ],
    disable: false,
  },
};

export const Disable: Story = {
  args: {
    ...Default.args,
    disable: true,
  },
};
