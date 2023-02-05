/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Col, Dropdown, Input, Row, Space, Typography } from "antd";
import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { FormInputs } from "./FormInputs";
import Popup from "./Popup";
import PopupForm from "./PopupForm";
const items = [
  {
    label: "1",
    key: "1",
    style: { textAlign: "center" },
  },
  {
    label: "2",
    key: "2",
    style: { textAlign: "center" },
  },
  {
    label: "3",
    key: "3",
    style: { textAlign: "center" },
  },
  {
    label: "4",
    key: "4",
    style: { textAlign: "center" },
  },
];
export const PatientsList = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuClick = (e) => {
    setValue(e.key);
  };
  const ProfilehandleSubmit = (form) => {
    let localStorageDate = localStorage.getItem("state");
    let data2 = JSON.parse(localStorageDate);
    data2 = [...data2, form];
    localStorage.setItem("state", JSON.stringify(data2));
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Col>PatientsList</Col>
        <Button
          className="button"
          icon={<PlusOutlined />}
          onClick={togglePopup}
        >
          Add Pateint
        </Button>
        {isOpen && (
          <Popup content={<PopupForm onSubmit={ProfilehandleSubmit} />} />
        )}
      </Row>
      <Row
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Space>
          <Typography style={{ fontSize: "16px" }}>Show</Typography>
          <Col>
            <Dropdown menu={menuProps}>
              <Button className="drop-down-btn">
                <Space>
                  <Typography style={{ fontSize: "16px" }}>
                    {value === "" ? 4 : value}
                  </Typography>
                  <Typography className="icon-container">
                    <DownOutlined className="up-angle-icon" />
                    <DownOutlined />
                  </Typography>
                </Space>
              </Button>
            </Dropdown>
          </Col>
          <Space>
            <Typography style={{ fontSize: "16px" }}>entries</Typography>
          </Space>
        </Space>
        <Space style={{ marginTop: "20px" }}>
          <Col>
            <Button className="drop-down-btn">
              <Space>
                <Typography style={{ fontSize: "16px" }}>Filters</Typography>
                <Space>
                  <Typography className="icon-container">
                    <FilterOutlined style={{ fontSize: "18px" }} />
                  </Typography>
                </Space>
              </Space>
            </Button>
          </Col>
        </Space>
      </Row>
      <Row>
        <FormInputs value={value} />
      </Row>
    </div>
  );
};
