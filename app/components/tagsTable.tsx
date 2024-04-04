"use client";

import React, { useState } from "react";
import type { TableColumnsType, TableProps } from "antd";
import { Space, Table, InputNumber } from "antd";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../features/dataSlice";
import { getTagsParams } from "../dataFetching";

interface DataType {
  name: string;
  count: number;
}

// types of Ant Design Table OnChange callback and connected sorting
type OnChange = NonNullable<TableProps<DataType>["onChange"]>;

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const TagsTable: React.FC<{
  loading: boolean;
  dataFetchFunc(arg: getTagsParams): void;
}> = ({ loading, dataFetchFunc }) => {
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [currentPage, setCurrentPage] = useState<number>(1);

  const data = useSelector((state: RootState) => state.data);
  const hasMore = useSelector((state: RootState) => state.dataHasMore);

  const dispatch = useDispatch();

  const handlePagination = ({
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
    for (let index of [...Array(pageSize).keys()]) {
      index += pageSize * (pageNumber - 1);

      // if any of the requested elements is undefined
      // it has to be downloaded from the API
      if (data[index] === undefined) {
        dataFetchFunc({ order, sort, pageNumber, pageSize });
        break;
      }
    }
  };

  const handleChange: OnChange = (pagination, _filters, sorter) => {
    if (Array.isArray(sorter)) {
      console.error(
        "Unexpected situation, sorter should never be an array," +
          "current implementation does not support multi sorting."
      );
      return;
    }

    const order = sorter.order === "ascend" ? "asc" : "desc";
    const sort = sorter.columnKey === "name" ? "name" : "popular";
    let pageNumber = pagination.current !== undefined ? pagination.current : 1;

    //sorterInfo is a previous sorting type and sorter is a new one
    if (
      sortedInfo.columnKey !== sorter.columnKey ||
      sortedInfo.order !== sorter.order
    ) {
      dispatch(clearAll());
      pageNumber = 1;
      dataFetchFunc({ order, sort, pageNumber, pageSize: currentPageSize });
    } else {
      handlePagination({ order, sort, pageNumber, pageSize: currentPageSize });
    }

    setCurrentPage(pageNumber);
    setSortedInfo(sorter as Sorts);
  };

  const [currentPageSize, setCurrentPageSize] = useState(8);

  const handlePageSizeChange = (value: number | null) => {
    if (value === null) {
      console.debug("Page size should not be null");
    } else {
      setCurrentPageSize(value);
      setCurrentPage(1);

      const order = sortedInfo.order === "ascend" ? "asc" : "desc";
      const sort = sortedInfo.columnKey === "name" ? "name" : "popular";
      handlePagination({
        sort,
        order,
        pageNumber: 1,
        pageSize: value,
      });
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Tag Name",
      dataIndex: "name",
      key: "name",
      align: "center",

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
      align: "center",
      sorter: (a, b) => a.count - b.count,
      sortOrder: sortedInfo.columnKey === "count" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <>
      <Space direction="vertical">
        <InputNumber
          min={1}
          max={100}
          addonBefore="Pagination size"
          style={{ width: 200 }}
          value={currentPageSize}
          onChange={handlePageSizeChange}
        />
        <Table
          rowKey="name"
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          pagination={{
            current: currentPage,
            pageSize: currentPageSize,
            total: data.length + Number(hasMore),
            showLessItems: true,
            showSizeChanger: false,
          }}
          loading={loading}
          bordered
        />
      </Space>
    </>
  );
};

export default TagsTable;
