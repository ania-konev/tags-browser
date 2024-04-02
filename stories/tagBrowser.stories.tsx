import React from "react";
import TagBrowser from "@/app/components/tagBrowser";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TagBrowser> = {
  title: "Example/App",
  component: TagBrowser,
};
export default meta;

type Story = StoryObj<typeof TagBrowser>;

const sampleResponse = {
  items: [
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 2528668,
      name: "Javascript",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 2191931,
      name: "python",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1917207,
      name: "java",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1614900,
      name: "c#",
    },
    {
      collectives: [
        {
          tags: ["php"],
          external_links: [
            {
              type: "support",
              link: "https://stackoverflow.com/contact?topic=15",
            },
          ],
          description:
            "A collective where developers working with PHP can learn and connect about the open source scripting language.",
          link: "/collectives/php",
          name: "PHP",
          slug: "php",
        },
      ],
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1464389,
      name: "php",
    },
    {
      collectives: [
        {
          tags: ["android", "ios"],
          external_links: [
            {
              type: "support",
              link: "https://stackoverflow.com/contact?topic=15",
            },
          ],
          description:
            "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
          link: "/collectives/mobile-dev",
          name: "Mobile Development",
          slug: "mobile-dev",
        },
      ],
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1417151,
      name: "android",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1187294,
      name: "html",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 1034836,
      name: "jquery",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 806685,
      name: "c++",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 804165,
      name: "css",
    },
    {
      collectives: [
        {
          tags: ["android", "ios"],
          external_links: [
            {
              type: "support",
              link: "https://stackoverflow.com/contact?topic=15",
            },
          ],
          description:
            "A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms",
          link: "/collectives/mobile-dev",
          name: "Mobile Development",
          slug: "mobile-dev",
        },
      ],
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 687216,
      name: "ios",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 670682,
      name: "sql",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 662020,
      name: "mysql",
    },
    {
      collectives: [
        {
          tags: [
            "tidyverse",
            "knitr",
            "shinydashboard",
            "plyr",
            "rstudio",
            "stringr",
            "forcats",
            "purrr",
            "zoo",
            "rvest",
            "tidyr",
            "shiny",
            "lubridate",
            "readr",
            "dplyr",
            "dtplyr",
            "quantmod",
            "r-package",
            "data.table",
            "rlang",
            "shinyapps",
            "r",
            "r-caret",
            "r-raster",
            "ggplot2",
            "shiny-server",
            "tibble",
          ],
          external_links: [
            {
              type: "support",
              link: "https://stackoverflow.com/contact?topic=15",
            },
          ],
          description:
            "A collective where data scientists and AI researchers gather to find, share, and learn about R and other subtags like knitr and dplyr.",
          link: "/collectives/r-language",
          name: "R Language",
          slug: "r-language",
        },
      ],
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 505449,
      name: "r",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 476540,
      name: "reactjs",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 471962,
      name: "node.js",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 416674,
      name: "arrays",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 403882,
      name: "c",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 374626,
      name: "asp.net",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 360319,
      name: "json",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 343616,
      name: "python-3.x",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 338047,
      name: "ruby-on-rails",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 337836,
      name: ".net",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 334485,
      name: "sql-server",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 333344,
      name: "swift",
    },
    {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 311779,
      name: "django",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 304037,
      name: "angular",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 292331,
      name: "objective-c",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 286599,
      name: "pandas",
    },
    {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      count: 286456,
      name: "excel",
    },
  ],
  has_more: true,
  quota_max: 10000,
  quota_remaining: 9940,
};

const mockedGetTags = (_order: string, _sort: string) => {};

export const Primary: Story = {
  args: {
    loading: true,
  },
  render: (args) => (
    <TagBrowser
      data={sampleResponse.items}
      loading={args.loading}
      getTags={mockedGetTags}
    />
  ),
};
