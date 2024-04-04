import React from "react";
import TagsTable from "@/app/components/tagsTable";
import type { Meta, StoryObj } from "@storybook/react";
import { Providers } from "@/app/providers";

const meta: Meta<typeof TagsTable> = {
  title: "Tags Table",
  component: TagsTable,
};
export default meta;

type Story = StoryObj<typeof TagsTable>;

const mockedGetTags = (_arg: unknown) => {};

export const Primary: Story = {
  args: {
    loading: true,
  },
  render: (args) => (
    <Providers>
      <TagsTable loading={args.loading} dataFetchFunc={mockedGetTags} />
    </Providers>
  ),
};
