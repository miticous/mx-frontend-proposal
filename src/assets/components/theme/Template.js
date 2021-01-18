import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import SideMenu from './SideMenu';

const Template = ({ children }) => (
  <Row>
    <Col span={24}>
      <Row>
        <Col span={5}>
          <SideMenu />
        </Col>
        <Col span={19}>{children}</Col>
      </Row>
    </Col>
  </Row>
);

Template.propTypes = {
  children: PropTypes.shape({}).isRequired
};

export default Template;
