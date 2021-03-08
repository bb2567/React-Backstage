import React, { Component } from "react";
import { SlackOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import "../scss/nav.scss";

class Nav extends Component {
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
            <span>使用者</span>
          </div>
          <div className="btn-group">
            <LogoutOutlined />
            <span>登出</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
