import { Col, Row } from "antd";
import React from "react";
import { HeaderComponent } from "./HeaderComponent";
import SideBarComponent from "./SideBar";
import { SubBodyComponent } from "./SubBodyComponent";
import TableComponent from "./TableComponent";

export const Overview = () => {
  return (
    <div>
      <Row>
        <Col span={4}>
          <SideBarComponent />
        </Col>
        <Col span={20} style={{ background: "#f9f9f9", paddingLeft: "30px" }}>
          <HeaderComponent />
          <SubBodyComponent />
          <TableComponent />
        </Col>
      </Row>
    </div>
  );
};
