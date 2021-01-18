import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const columns = [
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
    render: text => <span>{text}</span>
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
  }
];

const MemberTypesComponent = ({ data, isLoading }) => (
  <>{isLoading ? <div /> : <Table columns={columns} dataSource={data} />}</>
);

MemberTypesComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default MemberTypesComponent;
