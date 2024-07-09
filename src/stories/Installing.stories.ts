import type { Meta, StoryObj } from "@storybook/react";
import { Installing } from "../components/Installing";

const meta = {
  title: "Components/Installing",
  component: Installing,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/8b1ybhXm59AuVWCb6AHGuP/Hivello?node-id=4184-46185&t=WATJFQ20HJaaCtrq-4",
    },
  },
  args: {},
} satisfies Meta<typeof Installing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
