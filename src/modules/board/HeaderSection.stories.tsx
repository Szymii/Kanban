import { type Meta, type StoryObj } from "@storybook/react";

import { HeaderSection } from ".";

const meta = {
  component: HeaderSection,
} satisfies Meta<typeof HeaderSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users: [
      {
        id: "1",
        name: "Admin",
        surname: "Testowy",
      },
      {
        id: "2",
        name: "Tester",
        surname: "Testowy",
      },
    ],
    isOwner: true,
  },
};
