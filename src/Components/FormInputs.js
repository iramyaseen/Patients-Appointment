import React, { useState } from "react";
import { Col, Input, Row, Typography } from "antd";
import {
  CalendarOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import TableForm from "./TableForm";

export const FormInputs = ({ value }) => {
  return (
    <div className="form-container">
      <Row gutter={50} style={{ marginBottom: "30px", marginTop: "10px" }}>
        <Col>
          <Typography>Pateint</Typography>
          <div className="patient-input">
            <Input
              type="email"
              placeholder="patient name , patient id"
              style={{ height: "40px" }}
            />
            <Typography>
              <SearchOutlined />
            </Typography>
          </div>
        </Col>

        <Col>
          <Typography>Catagory</Typography>
          <div className="patient-input">
            <Input
              type="email"
              placeholder="All Catagory"
              style={{ height: "40px" }}
            />
            <Typography>
              <DownOutlined />
            </Typography>
          </div>
        </Col>
        <Col>
          <Typography>Date of joining</Typography>
          <div className="patient-input">
            <Input
              type="email"
              placeholder="03/12/2023"
              style={{ height: "40px" }}
            />
            <Typography>
              <CalendarOutlined />
            </Typography>
          </div>
        </Col>
      </Row>
      <Row>
        <TableForm numberOfValue={value} />
      </Row>
    </div>
  );
};
