import React, { Component } from "react";
import { Breadcrumb, Table } from "antd";
import { Link } from "react-router-dom";
import { LoadUserAction, LoadUserAsync } from "../../Action/UserAction";
// import service from "../../commons/Service";
import store from "../../store";

class UserMgr extends Component {
  state = {
    unsubscribe: null,
    userData: store.getState().UserList.list,
    // _page 當前頁面 , _limit:幾筆資料
    params: { _page: 1, _limit: 6 },
    total:0,
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
    const UserList = store.getState().UserList
    this.setState({ userData:UserList.list, total: UserList.total} );
  };
 
  componentDidMount() {
    //  發送ajax請求，到後台獲取data
    // service.loadUserList()
    // .then((res) => {
    //   this.setState({userData:res.data})
    // });
    store.dispatch(LoadUserAsync(this.state.params));
    const unsubscribe = store.subscribe(this.userListChange);
    this.setState({ unsubscribe: unsubscribe });
  }
  componentWillUnmount() {
    this.state.unsubscribe && this.state.unsubscribe();
  }

  userRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows);
    },
  };

  // 將插件的回調函數 儲存至 State 
  changePage = (page, pageSize) => {
    // console.log("page:", page, "pageSize:", pageSize); 
    this.setState(preState=> {
      return {...preState,...{params:{_page:page, _limit: pageSize}}}
    }, ()=>
    {store.dispatch(LoadUserAsync(this.state.params))})
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
          pagination={{
            total:this.state.total,
            pageSize: 6,
            defaultCurrent: 1,
            onChange: this.changePage,
          }}
          // pagination={false}
        ></Table>
      </div>
    );
  }
}

export default UserMgr;
