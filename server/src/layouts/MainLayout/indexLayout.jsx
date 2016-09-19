import React, { Component, PropTypes } from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import styles from './indexLayout.less';
const SubMenu = Menu.SubMenu;

const template = ({children}) =>{
  return (<div className="ant-layout-aside">
    <aside className="ant-layout-sider">
      <div className="ant-layout-logo"></div>
      <Menu mode="inline" theme="dark"
            defaultSelectedKeys={['0']} defaultOpenKeys={['sub1']}>
        <SubMenu key="sub1" title={<span><Icon type="setting" />基本配置</span>}>
          <Menu.Item key="0">当前状态</Menu.Item>
          <Menu.Item key="1">站点配置</Menu.Item>
          <Menu.Item key="2">短信配置</Menu.Item>
          <Menu.Item key="3">邮件配置</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="laptop" />日志管理</span>}>
          <Menu.Item key="5">错误</Menu.Item>
          <Menu.Item key="6">埋点</Menu.Item>
          <Menu.Item key="7">数据统计</Menu.Item>
        </SubMenu>
      </Menu>
    </aside>
    {children}
  </div>);
};

template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default template;

