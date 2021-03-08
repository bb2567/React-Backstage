import React, { Component } from "react";
import { Breadcrumb, Table } from "antd";
import { Link } from "react-router-dom";

class UserMgr extends Component {
  state = {
    userData: [
      {
        id: 1,
        name: "Aicoder",
        phone: "0800000123",
      },
      { id: 2, 
        name: "Aicoder2", 
        phone: "0800333666" 
    },
      {
        id: 3,
        name: "Aicoder3",
        phone: "0800666777",
      },
    ],
    columns: [
      {
        key: "id",
        title: "編號",
        dataIndex: "id",
      },
      {
        key: "name",
        title: "名字",
        dataIndex: "name",
      },
      {
        key: "phone",
        title: "電話",
        dataIndex: "phone",
      }
    ],
  };
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
        <hr />
        <Table style={{backgroundColor:"#fefefe"}}
          columns={this.state.columns}
          dataSource={this.state.userData}
        ></Table>
      </div>
    );
  }
}

export default UserMgr;
