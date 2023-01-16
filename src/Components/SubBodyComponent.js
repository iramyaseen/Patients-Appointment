import { Card, Col, Row, Typography } from "antd";
import React from "react";
import Request from "./Request";
import TodayAppointment from "./TodayAppointment";

export const SubBodyComponent = () => {
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Col span={8}>
        <Request />
      </Col>
      <Col span={6}>
        <Card
          style={{ background: "#7a6efe", display: "flex" }}
          bordered={false}
        >
          <Col
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                background: "black",
                fontSize: "25px",
                padding: "5px 10px",
                borderRadius: "50%",
                color: "white",
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
              }}
            ></Typography>
            <Col>
              <Col
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                24.4k
              </Col>
              <Col>Appointment</Col>
            </Col>
          </Col>
        </Card>
      </Col>
      <Col span={8}>
        <TodayAppointment />
      </Col>
    </Row>
  );
};
