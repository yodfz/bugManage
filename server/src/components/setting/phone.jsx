import React, { Component, PropTypes } from 'react';
import { Menu, Breadcrumb, Icon, Row , Col , Badge } from 'antd';
import DefaultTemplate from '../../layouts/MainLayout/defaultTemplate';
import styles from './site.less';

const template = () => {
  return (
    <DefaultTemplate>
      <div className="main">
        短信配置
      </div>
    </DefaultTemplate>
  );
};

template.propTypes = {};

export default template;

