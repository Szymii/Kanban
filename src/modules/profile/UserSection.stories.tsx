import { type Meta, type StoryObj } from "@storybook/react";

import { withUser } from "./UserProvider";
import { UserSection } from "./UserSection";

const meta = {
  component: UserSection,
  decorators: [withUser()],
} satisfies Meta<typeof UserSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
