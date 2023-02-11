import React from "react";
import { Divider, Typography } from "antd";
import { Card, Col, Row } from "antd";
import {
  CalendarOutlined,
  DatabaseOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Title, Paragraph } = Typography;
export const HeaderComponent = () => {
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  return (
    <div style={{ background: "red", width: "100%" }}>
      <Title level={2}>Welcome, Dr.Stephen</Title>
      <Paragraph>Have a nice day at great work</Paragraph>
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col className="gutter-row" span={6}>
          <Card
            style={{ background: "#7a6efe", width: "76%" }}
            bordered={false}
          >
            <Col
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{
                  background: "black",
                  fontSize: "25px",
                  padding: "10px 15px",
                  borderRadius: "50%",
                  color: "white",
                  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CalendarOutlined />
              </Typography>
              <Col>
                <Col
                  style={{
                    fontSize: "25px",
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
        <Col className="gutter-row" span={6}>
          <Card
            style={{ background: "#ff717f", width: "76%" }}
            bordered={false}
          >
            <Col
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{
                  background: "#FF717F",
                  fontSize: "25px",
                  padding: "10px 15px",
                  borderRadius: "50%",
                  color: "white",
                  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <UserOutlined />
              </Typography>
              <Col>
                <Col
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  163.4k
                </Col>
                <Col>Total Patient</Col>
              </Col>
            </Col>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card
            style={{ background: "#ffa901", width: "76%" }}
            bordered={false}
          >
            <Col
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{
                  background: "black",
                  fontSize: "25px",
                  padding: "10px 15px",
                  borderRadius: "50%",
                  color: "white",
                  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <DatabaseOutlined />
              </Typography>
              <Col>
                <Col
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  53.4k
                </Col>
                <Col>Clinic Consulting</Col>
              </Col>
            </Col>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card
            style={{ background: "#24a8fa", width: "76%" }}
            bordered={false}
          >
            <Col
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{
                  background: "black",
                  fontSize: "25px",
                  padding: "10px 15px",
                  borderRadius: "50%",
                  color: "white",
                  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <VideoCameraOutlined />
              </Typography>
              <Col>
                <Col
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  28.2k
                </Col>
                <Col>Video Consulting</Col>
              </Col>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
