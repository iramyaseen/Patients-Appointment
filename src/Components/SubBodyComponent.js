import React from "react";
import { DownOutlined, RiseOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Col, Dropdown, Row, Typography } from "antd";
import TodayAppointment from "./TodayAppointment";
import PieChart from "./Chart";
import AppointmentRequest from "./AppointmentRequest";
import Container from "react-bootstrap/Container";

const items = [
  {
    key: "1",
    label: "2034",
  },
  {
    key: "2",
    label: "2034",
  },
  {
    key: "3",
    label: "2034",
  },
];
export const SubBodyComponent = () => {
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Col span={8}>
        <AppointmentRequest />
      </Col>
      <Col span={7}>
        <Container
          style={{
            background: "white",
            padding: "20px 10px",
          }}
          bordered={false}
        >
          <Col
            style={{
              color: "black",
              display: "flex",
              marginBottom: "30px",
              justifyContent: " space-between",
            }}
          >
            <Row>
              <Col>
                <Typography
                  style={{
                    background: "#E9F6FE",
                    fontSize: "25px",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    color: "black",
                  }}
                >
                  <UserOutlined style={{ color: "#4BAAEA" }} />
                </Typography>
              </Col>
              <Col style={{ paddingLeft: "20px" }}>
                <Col
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  24.4k
                </Col>
                <Col style={{ color: "#616267", fontSize: "15px" }}>
                  New Patient
                </Col>
              </Col>
            </Row>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#7C71F4",
                paddingTop: "4px",
              }}
            >
              <RiseOutlined />
              15%
            </Typography>
          </Col>

          <Col
            style={{
              color: "black",
              display: "flex",
              marginBottom: "10px",
              justifyContent: " space-between",
            }}
          >
            <Row>
              <Col>
                <Typography
                  style={{
                    background: "#FFF6E5",
                    fontSize: "25px",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    color: "black",
                  }}
                >
                  <UserOutlined style={{ color: "#F8BE4E" }} />
                </Typography>
              </Col>
              <Col style={{ paddingLeft: "20px" }}>
                <Col
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  163.3k
                </Col>
                <Col style={{ color: "#616267", fontSize: "15px" }}>
                  Old Patient
                </Col>
              </Col>
            </Row>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#7C71F4",
                paddingTop: "4px",
              }}
            >
              <RiseOutlined />
              15%
            </Typography>
          </Col>
        </Container>
        <Typography
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "20px",
            paddingBottom: "10px",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontSize: "17px", fontWeight: "bold" }}>
            Gender
          </Typography>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
          >
            <Button type="primary" className="date-btn">
              2024 <DownOutlined />
            </Button>
          </Dropdown>
        </Typography>
        <Card>
          <PieChart />
        </Card>
      </Col>
      <Col span={8}>
        <TodayAppointment />
      </Col>
    </Row>
  );
};
