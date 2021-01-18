import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SideMenu = () => (
  <Menu
    onClick={() => false}
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
    <Menu.SubMenu key="sub1" title="mx-frontend-proposal">
      <Menu.ItemGroup key="g1" title="Member">
        <Menu.Item key="1">
          <Link to="/member-types">Tipos de membros</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/members">Membros</Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
);

export default SideMenu;
