"use client";
import TagBrowser from "./components/tagBrowser";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { message } from "antd";

export default function Home() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const errorMessage = (error: string) => {
    messageApi.open({
      type: "error",
      content: error,
    });
  };

  const getTags = ({
    order,
    sort,
    pageNumber,
    pageSize,
  }: {
    order: string;
    sort: string;
    pageNumber: number;
    pageSize: number;
  }) => {
    setLoading(true);

    axios
      .get(
        `https://api.stackexchange.com/2.3/tags?page=${pageNumber}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
      )
      .then((value) => {
        setData(value.data.items);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          errorMessage(
            "Error in tags fetching: " +
              error.response.statusText +
              " with status code " +
              error.response.status
          );
        } else if (error.request) {
          errorMessage("Tag request timed out" + error.status);
        } else {
          errorMessage("Error:" + error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //todo config provider

  useEffect(
    () => getTags({ order: "desc", sort: "name", pageNumber: 1, pageSize: 10 }),
    []
  );

  return (
    <>
      {contextHolder}{" "}
      <TagBrowser data={data} loading={loading} getTags={getTags} />
    </>
  );
}
