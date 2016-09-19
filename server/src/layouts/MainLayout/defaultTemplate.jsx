import React, { Component, PropTypes } from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';

const template = ({children})=> {
  return (<div className="ant-layout-main">
    <div className="ant-layout-header"></div>
    <div className="ant-layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
      </Breadcrumb>
    </div>
    <div className="ant-layout-container">
      <div className="ant-layout-content">
        <div>
          {children}
        </div>
      </div>
    </div>
    <div className="ant-layout-footer">
    </div>
  </div>);
};

template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default template;
