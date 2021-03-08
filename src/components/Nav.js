import React, { Component } from "react";
import { SlackOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import "../scss/nav.scss";
import { GetLoginUserInfo, Logout } from "../commons/Auth";

class Nav extends Component {
  state = { loginUser: GetLoginUserInfo() };

  handleLogout = () => {
    let {history} = this.props
    Modal.confirm({
      title: "提示",
      content: "確認登出嗎?",
      okText: "退出",
      cancelText: "返回",
      onOk: () => {
        Logout(); //清除 sessionStorage
        history.push("/login"); //跳轉
      },
    });
  };
  render() {
    return (
      <div className="nav">
        <div className="logo-wrap">
          <a href="/">
            <SlackOutlined />
            <span>後台管理系統</span>
          </a>
        </div>
        <div className="user-wrap">
          <div className="btn-group">
            <UserOutlined />
            <span>{this.state.loginUser && this.state.loginUser.username}</span>
          </div>
          <div className="btn-group" onClick={this.handleLogout}>
            <LogoutOutlined />
            <span>登出</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
