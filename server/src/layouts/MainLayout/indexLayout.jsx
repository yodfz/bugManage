import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router'
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
          <Menu.Item key="0"><Link to="/">当前状态</Link></Menu.Item>
          <Menu.Item key="1"><Link to="/setting/site">站点配置</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/setting/phone">短信配置</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/setting/email">邮件配置</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="laptop" />日志管理</span>}>
          <Menu.Item key="5"><Link to="/message/error">错误</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/message/info">埋点</Link></Menu.Item>
          <Menu.Item key="7"><Link to="/message/charts">数据统计</Link></Menu.Item>
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

