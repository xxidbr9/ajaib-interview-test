import { Table as AntdTable } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  username: string;
  name: string;
  email: string;
  gender: string; // todo change gender to type gender
  register_date: Date | number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Username',
    dataIndex: 'username',
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ['descend'],
  },
  {
    title: 'Name',
    dataIndex: 'name',
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ['descend'],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    defaultSortOrder: 'descend',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Register Date',
    dataIndex: 'register_date',
  },
];

const data: DataType[] = [
  {
    key: '1',
    username: 'xxidbr9',
    name: 'Barnando Akbarto Hidayatullah',
    email: 'barnando13@gmail.com',
    gender: 'male',
    register_date: Date.now(),
  },
];

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Table: React.FC = () => (
  <AntdTable columns={columns} dataSource={data} onChange={onChange} />
);
export default Table;
