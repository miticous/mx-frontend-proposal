import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <span>{text}</span>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Situação',
    dataIndex: 'MemberType.id',
    key: 'MemberType.description',
    render: (_, record) => <span>{record.MemberType.description}</span>
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
  }
];

const MembersComponent = ({ data, isLoading }) => (
  <>{isLoading ? <div /> : <Table columns={columns} dataSource={data} />}</>
);

MembersComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default MembersComponent;
