import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Nav from "../components/Nav";
import MenuBar from "../components/MenuBar";
import UserMgr from './Admin/UserMgr';
import PerMgr from './Admin/PerMgr';
import RoleMgr from './Admin/RoleMgr';

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends Component {
  render() {
    const {match} = this.props
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ color: "white", padding: "0 1.5rem" }}>
          <Nav history={this.props.history} />
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: "#fff" }}>
            <MenuBar history={this.props.history} />
          </Sider>
          <Content style={{padding:'15px'}}>
            <Switch>
              <Route path={`${match.path}/user_mgr`} component={UserMgr}/>
              <Route path={`${match.path}/role_mgr`} component={RoleMgr}/>
              <Route path={`${match.path}/per_mgr`} component={PerMgr}/>
              <Route component={()=>{
                return <span>歡迎使用後台系統</span>
              }}></Route>
            </Switch>
          </Content>
        </Layout>
        <Footer style={{ backgroundColor: "silver" ,height:"38px"}}>footer</Footer>
      </Layout>
    );
  }
}
