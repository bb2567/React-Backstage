import React, { Component } from "react";
import { Layout } from "antd";
import Nav from "../components/Nav"


const { Header, Footer, Sider, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{minHeight:"100vh"}}>
        <Header style={{color:'white', padding:'0 1.5rem'}}>
        <Nav/>
        </Header>
        <Layout>
          <Sider style={{backgroundColor:"silver"}}>123</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer style={{backgroundColor:"silver"}}>footer</Footer>
      </Layout>
    );
  }
}
