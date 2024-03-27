"use client";

import React, { useState } from "react";
import type { TableColumnsType, TableProps } from "antd";
import { Space, Table } from "antd";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  name: string;
  count: number;
}

const App: React.FC<{ data: Array<DataType> }> = ({ data }) => {
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);

    setSortedInfo(sorter as Sorts);
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

  return (
    <>
      <Space style={{ marginBottom: 16 }}></Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
  );
};

export default App;
