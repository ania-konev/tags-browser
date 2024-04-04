import React from "react";
import TagsBrowser from "@/app/page";
import type { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sampleDefaultResponse from "./sample-object-desc-name.json";
import sampleAscNameResponse from "./sample-object-asc-name.json";
import sampleDescCountResponse from "./sample-object-desc-popular.json";
import sampleAscCountResponse from "./sample-object-asc-popular.json";
import sampleAscNamePage2Response from "./sample-object-asc-name-page2.json";
import { Providers } from "@/app/providers";
import "app/globals.scss";

interface QueryParams {
  page: number;
  order: string;
  sort: string;
}
const mock = new MockAdapter(axios);

//Mocking data not to exhaust the maximum request during development and testing.
//Usually this type of jsons should be in git LFS but I have not included them to meet the requirement that a simple
//git clone and npm ci & npm run storybook will launch working storybook application

mock
  .onGet("https://api.stackexchange.com/2.3/tags", {
    params: {
      asymmetricMatch(actual: QueryParams) {
        return (
          actual["page"] === 1 &&
          actual["order"] === "desc" &&
          actual["sort"] == "name"
        );
      },
    },
  })
  .reply(200, sampleDefaultResponse);

mock
  .onGet("https://api.stackexchange.com/2.3/tags", {
    params: {
      asymmetricMatch(actual: QueryParams) {
        return (
          actual["page"] === 1 &&
          actual["order"] === "asc" &&
          actual["sort"] == "name"
        );
      },
    },
  })
  .reply(200, sampleAscNameResponse);

mock
  .onGet("https://api.stackexchange.com/2.3/tags", {
    params: {
      asymmetricMatch(actual: QueryParams) {
        return (
          actual["page"] === 2 &&
          actual["order"] === "asc" &&
          actual["sort"] == "name"
        );
      },
    },
  })
  .reply(200, sampleAscNamePage2Response);

mock
  .onGet("https://api.stackexchange.com/2.3/tags", {
    params: {
      asymmetricMatch(actual: QueryParams) {
        return (
          actual["page"] === 1 &&
          actual["order"] === "asc" &&
          actual["sort"] == "popular"
        );
      },
    },
  })
  .reply(200, sampleAscCountResponse);

mock
  .onGet("https://api.stackexchange.com/2.3/tags", {
    params: {
      asymmetricMatch(actual: QueryParams) {
        return (
          actual["page"] === 1 &&
          actual["order"] === "desc" &&
          actual["sort"] == "popular"
        );
      },
    },
  })
  .reply(200, sampleDescCountResponse);

const meta: Meta<typeof TagsBrowser> = {
  title: "Home Page",
  component: TagsBrowser,
};
export default meta;

type Story = StoryObj<typeof TagsBrowser>;

export const Primary: Story = {
  render: () => {
    return (
      <Providers>
        <TagsBrowser />
      </Providers>
    );
  },
};
