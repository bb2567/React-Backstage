import React, { Component } from "react";
import { Breadcrumb, Table } from "antd";
import { Link } from "react-router-dom";
import { ActionTypesAsync } from "../../Action/UserAction";
// import service from "../../commons/Service";
import store from "../../store";

class UserMgr extends Component {
  state = {
    unsubscribe:null,
    userData: store.getState().UserList,
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
      },
    ],
  };
  userListChange = () => {
    this.setState({ userData: store.getState().UserList });
  };

  componentDidMount() {
    //  發送ajax請求，到後台獲取data
    // service.loadUserList()
    // .then((res) => {
    //   this.setState({userData:res.data})
    // });
    store.dispatch(ActionTypesAsync({}));
    const unsubscribe = store.subscribe(this.userListChange);
    this.setState({unsubscribe:unsubscribe})
  }
  componentWillUnmount(){
    this.state.unsubscribe && ( this.state.unsubscribe())
  }

  userRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows);
    },
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
        <Table
          style={{ backgroundColor: "#fefefe" }}
          bordered
          columns={this.state.columns}
          dataSource={this.state.userData}
          rowSelection={this.userRowSelection}
          rowKey="id"
        ></Table>
      </div>
    );
  }
}

export default UserMgr;
