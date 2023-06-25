import { type Meta, type StoryObj } from "@storybook/react";
import { withToasts } from "src/containers/Toasts";
import { withTRPC } from "src/utils/storybook";
import { getRelationHandler } from "src/utils/storybook/handlers";

import { TaskRelations } from ".";

const meta = {
  component: TaskRelations,
  decorators: [withTRPC(), withToasts()],
  parameters: {
    msw: {
      handlers: [getRelationHandler()],
    },
  },
} satisfies Meta<typeof TaskRelations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    members: [],
    taskId: "123",
  },
};
