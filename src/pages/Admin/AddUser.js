import React, { Component } from "react";
import { Modal } from "antd";

class AddUser extends Component {
  render() {
    return (
      <Modal
        title="新增用戶資料"
        okText="確定"
        cancelText="取消"
        visible={this.props.visible}
        onCancel={() => this.props.close()}
      >
        add user
      </Modal>
    );
  }
}

export default AddUser;
