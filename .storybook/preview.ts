import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

import "../src/styles/globals.css";

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
  },
  decorators: [mswDecorator],
};

export default preview;
