import React, { Component } from "react";
import { Form, Input } from "antd";
import { UserOutlined, MailOutlined,LockOutlined,PhoneOutlined} from "@ant-design/icons";

class AddUserFrom extends Component {
  render() {
    return (
      <Form
        layout="horizontal"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          label="帳號"
          name="username"
          rules={[
            { required: true, message: "請輸入使用者名稱" },
            { pattern: /\w{6,12}/gi, message: "請輸入6~12個字元" },
          ]}
        >
          <Input placeholder="請輸入6~12個字元" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          label="密碼"
          name="password"
          rules={[
            { required: true, message: "請輸入使用者密碼" },
            { pattern: /\w{6,20}/gi, message: "請輸入6~20個字元" },
          ]}
        >
          <Input.Password placeholder="請輸入6~12個字元" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item
          label="信箱"
          name="mail"
          rules={[
            { required: true, message: "請輸入信箱" },
            { type: "email", message: "請輸入正確信箱" },
          ]}
        >
          <Input placeholder="請輸入信箱" prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item
          label="姓名"
          name="name"
          rules={[
            { required: true, message: "請輸入姓名" },
            { min: 2, message: "請輸入姓名" },
          ]}
        >
          <Input placeholder="請輸入姓名" prefix={<UserOutlined/>} />
        </Form.Item>
        <Form.Item
          label="電話"
          name="phone"
          rules={[
            { required: true, message: "請輸入電話" },
            { pattern: /\d{10}/gi, message: "請輸入電話" },
          ]}
        >
          <Input placeholder="請輸入電話" prefix={<PhoneOutlined />} />
        </Form.Item>
      </Form>
    );
  }
}

export default AddUserFrom;
