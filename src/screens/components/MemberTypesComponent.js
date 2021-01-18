import React from 'react';
import { Table, Space } from 'antd';

const columns = [
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
    render: text => <a href="/">{text}</a>
  },
  {
    title: 'Situação',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Criado ás',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: 'Atualizado ás',
    dataIndex: 'updatedAt',
    key: 'updatedAt'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href="/">Invite {record.name}</a>
        <a href="/">Delete</a>
      </Space>
    )
  }
];

const MemberTypesComponent = () => <Table columns={columns} dataSource={[]} />;

export default MemberTypesComponent;
