import axios, { AxiosError } from "axios";
import { addNew } from "./features/dataSlice";
import { setHasMore } from "./features/dataHasMoreSlice";
import { Dispatch } from "@reduxjs/toolkit";

const url = "https://api.stackexchange.com/2.3/tags";

export interface getTagsParams {
  order: string;
  sort: string;
  pageNumber: number;
  pageSize: number;
}

export default function getTags(
  { order, sort, pageNumber, pageSize }: getTagsParams,
  dispatch: Dispatch,
  errorCallback: (arg: string) => void,
  finallyCallback: () => void
): void {
  axios
    .get(url, {
      params: {
        page: pageNumber,
        pagesize: pageSize,
        order: order,
        sort: sort,
        site: "stackoverflow",
        /*According to the documentation of the StackOverflow API Key is not a sensitive value 
         and can be available on the client site.*/
        key: process.env.NEXT_PUBLIC_STACK_EXCHANGE_KEY,
      },
    })
    .then((value) => {
      dispatch(addNew({ data: value.data.items, pageSize, pageNumber }));
      dispatch(setHasMore(value.data.has_more));
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        errorCallback(
          "Error in tags fetching: " +
            error.response.statusText +
            " with status code " +
            error.response.status
        );
      } else if (error.request) {
        errorCallback("Tag request timed out" + error.status);
      } else {
        errorCallback("Error:" + error.message);
      }
    })
    .finally(finallyCallback);
}
