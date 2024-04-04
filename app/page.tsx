"use client";

import React, { useEffect, useState } from "react";
import { message } from "antd";
import { Layout, ConfigProvider } from "antd";
import Image from "next/image";
import TagsTable from "./components/tagsTable";
import variables from "app/constants.module.scss";
import getTags from "./dataFetching";
import { useDispatch } from "react-redux";
import styles from "./page.module.scss";

const { Header, Content } = Layout;

export default function TagsBrowser() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const errorMessage = (error: string) => {
    messageApi.open({
      type: "error",
      content: error,
    });
  };

  useEffect(
    () =>
      getTags(
        { order: "desc", sort: "name", pageNumber: 1, pageSize: 8 },
        dispatch,
        errorMessage,
        () => setLoading(false)
      ),
    []
  );

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: `${variables.defaultColor}`,
            headerColor: "white",
          },
          Table: {
            borderColor: `${variables.defaultColor}`,
            headerBg: `${variables.tableBgColor}`,
            headerBorderRadius: 20,
            headerSortActiveBg: `${variables.tableBgColor}`,
          },
        },
        token: {
          colorPrimary: `${variables.defaultColor}`,
        },
      }}
    >
      <Header className={styles.header}>
        Tag browser with number of related posts provided by{" "}
        <a href="https://api.stackexchange.com/docs">StackOverflow API</a>
        <Image
          src="/stack-overflow-logo.png"
          alt="StackOverflow logo"
          width={40}
          height={30}
        />
      </Header>
      <Content className={styles.content}>
        {contextHolder}
        <TagsTable
          loading={loading}
          dataFetchFunc={(arg) =>
            getTags(arg, dispatch, errorMessage, () => setLoading(false))
          }
        />
      </Content>
    </ConfigProvider>
  );
}
