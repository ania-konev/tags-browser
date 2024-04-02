import React from "react";
import Home from "@/app/page";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Home> = {
  title: "Example/Home",
  component: Home,
};
export default meta;

type Story = StoryObj<typeof Home>;

export const Primary: Story = {
  render: () => <Home />,
};
