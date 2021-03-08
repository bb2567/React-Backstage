import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

class UserMgr extends Component {
  render() {
    return (
      <div className="admin-usermgr">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/home">首頁</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/home/user_mgr">UserMgr</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <hr/>
      </div>
    );
  }
}

export default UserMgr;
