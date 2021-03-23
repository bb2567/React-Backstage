import React, { Component } from "react";
import { Modal } from "antd";
import AddUserFrom from "./AddUserFrom";

class AddUser extends Component {
  userAddForm = null;

  handleSubmit = () => {
    // console.log(this.userAddForm);
    this.userAddForm.validateFields(function (err, data) {
      console.log(err);
      console.log(data);
    });
  };

  render() {
    return (
      <Modal
        title="新增用戶資料"
        okText="確定"
        cancelText="取消"
        visible={this.props.visible}
        onCancel={this.props.close}
        onOk={this.handleSubmit}
        // 使用 destroyOnClose 清除Modal內的子元素
        destroyOnClose
      >
        <AddUserFrom ref={(data) => (this.userAddForm = data)} />
      </Modal>
    );
  }
}

export default AddUser;
