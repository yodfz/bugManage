import React, { Component, PropTypes,Props } from 'react';
import { Menu, Breadcrumb, Icon, Row , Col , Badge,Form, Input, Button, Checkbox, Radio, Tooltip } from 'antd';
import DefaultTemplate from '../../layouts/MainLayout/defaultTemplate';
import styles from './site.less';

const template = () => {
  const { getFieldProps } = Props.form;

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  };

  return (
    <DefaultTemplate>
      <div className="site">
        <Form onSubmit={handleSubmit}>
          <FormItem label="站点名称">
            <Input placeholder="请输入站点名称"
              {...getFieldProps('userName')}
            />
          </FormItem>
          <FormItem label="AppKey">
            <Input placeholder="请输入AppKey"
              {...getFieldProps('userName')}
            />
          </FormItem>
        </Form>
      </div>
    </DefaultTemplate>
  );
};

template.propTypes = {};

export default template;

