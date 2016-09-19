import React, { Component, PropTypes } from 'react';
import { Menu, Breadcrumb, Icon, Row , Col , Badge } from 'antd';
import defaultTemplate from '../../layouts/MainLayout/defaultTemplate';
import styles from './site.less';

const template = () => {
  return (
    <defaultTemplate>
      <div className="main">
        <Row>
          <Col className="line-20" span="8">
            本日收集:&nbsp;
            <Badge count="1902" overflowCount={9999999999} style={{ backgroundColor: '#87d068' }}/>
          </Col>
          <Col span="8">
            错误:&nbsp;
            <Badge count="680" overflowCount={9999999999}/>
          </Col>
          <Col span="8">
            消息:&nbsp;
            <Badge count="291" overflowCount={9999999999} style={{ backgroundColor: '#ef0',color:'#4b4b4b' }}/>
          </Col>
        </Row>
      </div>
    </defaultTemplate>
  );
};

template.propTypes = {};

export default template;

