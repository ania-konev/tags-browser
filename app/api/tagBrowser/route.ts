import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import axios from "axios";
import { randomInt } from "crypto";

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
  ],
};

export async function GET(request: NextRequest) {
  const order = "desc";
  const sort = "popular";
  const random_prefix = randomInt(10000000);
  // const url = `https://api.stackexchange.com/2.3/tags?order=${order}&sort=${sort}&site=stackoverflow`;

  // const result = await axios.get(url);

  for (const element of sampleResponse.items) {
    element.name = random_prefix + element.name;
  }

  return NextResponse.json(sampleResponse);
}
