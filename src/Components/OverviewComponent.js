import React from "react";
import { HeaderComponent } from "./HeaderComponent";
import SideBarComponent from "./SideBar";
import { SubBodyComponent } from "./SubBodyComponent";
import TableComponent from "./TableComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export const Overview = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout style={{ height: "100vh" }}>
        <Sider style={siderStyle}>
          <SideBarComponent />
        </Sider>
        <Layout>
          <Header>
            <HeaderComponent />
          </Header>
          {/* <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
      </Layout>
    </Space>
    // <SideBarComponent />
    // <Container>
    //   {/* <HeaderComponent /> */}
    //   {/* <Col style={{ background: "#f9f9f9", paddingLeft: "30px" }}> */}
    //   {/* <SubBodyComponent /> */}
    //   {/* <TableComponent /> */}
    //   {/* </Col> */}
    // </Container>
  );
};
