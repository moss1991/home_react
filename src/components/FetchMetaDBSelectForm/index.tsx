/**
 * 各个页面通用逻辑组件
 */
import React, { Component, ReactNode } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.scss';

interface CommonBaseProps {
    children?: ReactNode | undefined
}

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
  dbname?:string;
  url?:string;
  username?: string;
  password?: string;
};


export default class FetchMetaDBSelectForm extends Component<CommonBaseProps> {
  render() {
    return (
      <div className="common-base-wrapper">
        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} 
          initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            
            <Form.Item<FieldType>
              label="数据库名" name="dbname"
              rules={[{ required: true, message: 'Please input your dbname!' }]}
            > <Input /> </Form.Item>

            <Form.Item<FieldType>
              label="URL" name="url"
              rules={[{ required: true, message: 'Please input your url!' }]}
            > <Input /> </Form.Item>

            <Form.Item<FieldType>
              label="用户名" name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            > <Input /> </Form.Item>

            <Form.Item<FieldType>
              label="密码" name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            > <Input.Password /> </Form.Item>

        </Form>
      </div>
    );
  }
}
