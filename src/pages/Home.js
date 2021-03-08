import React, { Component } from "react";
import { Layout } from "antd";
import Nav from "../components/Nav";
import MenuBar from "../components/MenuBar";

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ color: "white", padding: "0 1.5rem" }}>
          <Nav history={this.props.history} />
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: "#fff" }}>
            <MenuBar history={this.props.history} />
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer style={{ backgroundColor: "silver" }}>footer</Footer>
      </Layout>
    );
  }
}
