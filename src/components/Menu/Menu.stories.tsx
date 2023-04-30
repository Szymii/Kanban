import { type StoryObj } from "@storybook/react";

import { Menu } from ".";

export default {
  component: Menu,
};

export const Default: StoryObj<typeof Menu> = {
  render: () => (
    <Menu>
      <a>Backlog</a>
      <a>Remove board</a>
    </Menu>
  ),
};
