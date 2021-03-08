import React, { Component } from "react";
import { AppstoreOutlined, BuildOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";

const { SubMenu } = Menu;

class MenuBar extends Component {
  state = {
    current: "",
  };
  handleMenuClick = (e) => {
    console.log(e); //
    this.setState({current:e.key})
  };

  render() {
    return (
      <div className="aside-menubar">
        <Menu
          onClick={this.handleMenuClick}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu title="後台管理" icon={<AppstoreOutlined />}>
            <MenuItem key="user_mgr" >用戶管理</MenuItem>
            <MenuItem key="role_mgr">角色管理</MenuItem>
            <MenuItem key="per_mgr">權限管理</MenuItem>
          </SubMenu>
          <SubMenu title="商品管理" icon={<BuildOutlined />}>
            <MenuItem key="goods_key">新增商品</MenuItem>
            <MenuItem key="oder_key">訂單管理</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default MenuBar;
