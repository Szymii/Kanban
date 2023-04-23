import { type Meta, type StoryObj } from "@storybook/react";

import { BoardCard } from "./BoardCard";

const meta = {
  component: BoardCard,
} satisfies Meta<typeof BoardCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "PZP",
    action: () => {
      return;
    },
  },
};

export const Example: Story = {
  args: {
    content: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.9999 37.3333H53.3333V45.3333H61.3333V50.6667H53.3333V58.6667H47.9999V50.6667H39.9999V45.3333H47.9999V37.3333ZM10.6666 8H47.9999C49.4144 8 50.771 8.5619 51.7712 9.5621C52.7713 10.5623 53.3333 11.9188 53.3333 13.3333V32.2133C49.3211 31.5393 45.2027 32.4163 41.8133 34.6667H31.9999V45.3333H34.8799C34.5866 47.1467 34.5866 48.9333 34.8799 50.6667H10.6666C9.2521 50.6667 7.89554 50.1048 6.89535 49.1046C5.89515 48.1044 5.33325 46.7478 5.33325 45.3333V13.3333C5.33325 11.9188 5.89515 10.5623 6.89535 9.5621C7.89554 8.5619 9.2521 8 10.6666 8ZM10.6666 18.6667V29.3333H26.6666V18.6667H10.6666ZM31.9999 18.6667V29.3333H47.9999V18.6667H31.9999ZM10.6666 34.6667V45.3333H26.6666V34.6667H10.6666Z"
          fill="#A3C6ff"
        />
      </svg>
    ),
    action: () => {
      return;
    },
  },
};
