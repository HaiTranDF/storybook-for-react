import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "../components/sidebar/Sidebar";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figspec",
      url: "https://www.figma.com/design/8b1ybhXm59AuVWCb6AHGuP/Hivello?node-id=4184-46185&t=WATJFQ20HJaaCtrq-4",
    },
  },
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Right: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
