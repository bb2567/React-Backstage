import React, { Component } from "react";
import { UserOutlined,MailOutlined,RobotOutlined,LockOutlined,PhoneOutlined} from "@ant-design/icons";
import { Form, Input } from "antd";

class AddUserFrom extends Component {
  render() {
    return (
      <Form
        layout="horizontal"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          name="username"
          label="使用者名稱:"
          rules={[
            {
              pattern: /\w{6,20}/gi,
              message: "輸入６-20個字元!",
            },
            {
              required: true,
              message: "請輸入用戶名!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="輸入６-20個字元" />
        </Form.Item>
        <Form.Item
          name="password"
          label="使用者密碼:"
          rules={[
            {
              pattern: /\w{6,20}/gi,
              message: "輸入６-20個字元!",
            },
            {
              required: true,
              message: "請輸入密碼!",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="輸入６-20個字元" />
        </Form.Item>
        <Form.Item
          name="mail"
          label="Email:"
          rules={[
            {
              type: "email",
              message: "請輸入正確信箱格式!",
            },
            {
              required: true,
              message: "請輸入信箱!",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="user@gmail.com" />
        </Form.Item>
        <Form.Item
          name="name"
          label="姓名:"
          rules={[
            {
              min: 2,
              max:4,
              message: "請輸入姓名!",
            },
            {
              required: true,
              message: "請輸入姓名!",
            },
          ]}
        >
          <Input prefix={<RobotOutlined />} placeholder="王小明" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="手機號碼:"
          rules={[
            {
              pattern: /\d{10}/gi,
              message: "輸入10個號碼!",
            },
            {
              required: true,
              message: "請輸入手機號碼!",
            },
          ]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="手機號碼" />
        </Form.Item>
      </Form>
    );
  }
}

export default AddUserFrom;
