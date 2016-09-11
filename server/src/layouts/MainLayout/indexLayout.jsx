import React, { Component, PropTypes } from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import styles from './indexLayout.less';
const SubMenu = Menu.SubMenu;

const template = ({children}) =>{
  return (<div className="ant-layout-aside">
    <aside className="ant-layout-sider">
      <div className="ant-layout-logo"></div>
      <Menu mode="inline" theme="dark"
            defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
        <SubMenu key="sub1" title={<span><Icon type="setting" />基本配置</span>}>
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
    <div className="ant-layout-main">
      <div className="ant-layout-header"></div>
      <div className="ant-layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="ant-layout-container">
        <div className="ant-layout-content">
          <div style={{ height: 590 }}>
            {children}
          </div>
        </div>
      </div>
      <div className="ant-layout-footer">
        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
      </div>
    </div>
  </div>);
};

template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default template;

