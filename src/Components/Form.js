import { Col, Row } from "antd";
import React from "react";
import SideBarComponent from "./SideBar";
import { PatientsList } from "./PatientsList";

export const Form = () => {
  return (
    <Row>
      <Col span={4}>
        <SideBarComponent />
      </Col>
      <Col
        span={40}
        style={{
          background: "#f9f9f9",
          paddingLeft: "30px",
          height: "100vh",
          width: "85%",
        }}
      >
        <PatientsList />
      </Col>
    </Row>
  );
};
