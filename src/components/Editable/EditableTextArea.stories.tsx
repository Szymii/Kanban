import { type Meta, type StoryObj } from "@storybook/react";

import { EditableTextArea } from "./EditableTextArea";

const meta = {
  component: EditableTextArea,
} satisfies Meta<typeof EditableTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultText: `Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w 
przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. 

przez nieznanego drukarza do wypełnienia tekstem próbnej książki. 
Pięć wieków później zaczął być używany przemyśle elektronicznym,`,
  },
};
