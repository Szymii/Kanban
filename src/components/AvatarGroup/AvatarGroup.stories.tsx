import { type StoryObj } from "@storybook/react";

import { AvatarGroup } from ".";
import { Avatar } from "../Avatar";

export default {
  component: AvatarGroup,
};

export const Default: StoryObj<typeof AvatarGroup> = {
  render: () => (
    <AvatarGroup>
      <Avatar name="Admin" surname="Test" />
      <Avatar name="Admin" surname="Test" />
      <Avatar name="Admin" surname="Test" />
      <Avatar name="Admin" surname="Test" />
    </AvatarGroup>
  ),
};

export const WithCounter: StoryObj<typeof AvatarGroup> = {
  render: () => (
    <AvatarGroup>
      <Avatar name="Admin" surname="Test" />
      <Avatar name="Admin" surname="Test" />
      <Avatar name="Admin" surname="Test" />
      <Avatar name="Admin" surname="Test" />
      <Avatar name="Admin" surname="Test" />
      <Avatar name="Admin" surname="Test" />
    </AvatarGroup>
  ),
};
