import React from "react";
import { Typography } from "antd";
import { Card, Col, Row, Statistic } from "antd";
import { ArrowDownOutlined, BarChartOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
export const HeaderComponent = () => {
  return (
    <div style={{ padding: "30px 0px" }}>
      <Title level={2}>Welcome, Dr.Stephen</Title>
      <Paragraph>Have a nice day at great work</Paragraph>
      <Row gutter={16}>
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
              >
                <BarChartOutlined />
              </Typography>
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
        <Col span={6}>
          <Card
            style={{ background: "#ff717f", display: "flex" }}
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
              >
                <BarChartOutlined />
              </Typography>
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
        <Col span={6}>
          <Card
            style={{ background: "#ffa901", display: "flex" }}
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
              >
                <BarChartOutlined />
              </Typography>
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
        <Col span={6}>
          <Card
            style={{ background: "#24a8fa", display: "flex" }}
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
              >
                <BarChartOutlined />
              </Typography>
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
      </Row>
    </div>
  );
};
