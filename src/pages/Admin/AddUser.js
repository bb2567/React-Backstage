import React, { Component } from "react";
import { Modal ,Form} from "antd";
import AddUserFrom from "./AddUserFrom"


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
        <AddUserFrom/>
      </Modal>
    );
  }
}

export default AddUser;
