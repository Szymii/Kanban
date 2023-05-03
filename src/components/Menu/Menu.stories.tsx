import { type StoryObj } from "@storybook/react";

import { Menu } from ".";

export default {
  component: Menu,
};

export const Default: StoryObj<typeof Menu> = {
  render: () => (
    <div className="ml-56">
      <Menu>
        <a>Backlog</a>
        <a>Remove board</a>
        <a>Remove board</a>
      </Menu>
    </div>
  ),
};

export const Scrollable: StoryObj<typeof Menu> = {
  render: () => (
    <div className="ml-56">
      <Menu>
        <a>Backlog</a>
        <a>Remove board</a>
        <a>Remove board</a>
        <a>Remove board</a>
        <a>Remove board</a>
        <a>Remove board</a>
        <a>Remove board</a>
        <a>Remove board</a>
        <a>Remove board</a>
      </Menu>
    </div>
  ),
};
