"use client";

import React, { useState } from "react";
import type { TableColumnsType, TableProps } from "antd";
import { Space, Table, InputNumber } from "antd";

interface DataType {
  name: string;
  count: number;
}
type OnChange = NonNullable<TableProps<DataType>["onChange"]>;

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const TagBrowser: React.FC<{
  data: DataType[];
  loading: boolean;
  getTags(arg: {
    order: string;
    sort: string;
    pageNumber: number;
    pageSize: number;
  }): void;
}> = ({ data, loading, getTags }) => {
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  const handleChange: OnChange = (pagination, filters, sorter) => {
    if (Array.isArray(sorter)) {
      console.log();
      return;
    }

    //asserts

    const order = sorter.order === "ascend" ? "asc" : "desc";
    const sort = sorter.columnKey === "name" ? "name" : "popular";
    const pageNumber =
      pagination.current !== undefined ? pagination.current : 1;

    getTags({ order, sort, pageNumber, pageSize: inputPageSize }); //gdie ja to wywoluje???!

    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter as Sorts);
  };

  const [inputPageSize, setInputPageSize] = useState(10);

  const handleInputSize = (value: number | null) => {
    if (value === null) {
      console.log("Value: null");
    } else {
      setInputPageSize(value);
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Tag Name",
      dataIndex: "name",
      key: "name",

      sorter: (a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      },
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Count of Related Posts",
      dataIndex: "count",
      key: "count",
      sorter: (a, b) => a.count - b.count,
      sortOrder: sortedInfo.columnKey === "count" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  //todo api key add

  return (
    <>
      <Space direction="vertical">
        <InputNumber
          min={1}
          max={500}
          addonBefore="Pagination size"
          style={{ width: 200 }}
          value={inputPageSize}
          onChange={handleInputSize}
        />
        <Table
          rowKey="name"
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          pagination={{
            pageSize: inputPageSize,
            total: 1000,
            showLessItems: true,
            showSizeChanger: false,
          }}
          loading={loading}
        />
      </Space>
    </>
  );
};

export default TagBrowser;
