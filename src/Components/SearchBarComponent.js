import { Avatar, Input, Image, Select } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import avatar from "../assets/avatar.jpeg";
import styled from "styled-components";

const Container = styled.div``;

export default function SearchBarComponent() {
  return (
    <Container>
      <Input size="small" placeholder="large size" prefix={<UserOutlined />} />
      <Avatar src={<Image src={avatar} style={{ width: 32 }} />} />

      <Select
        defaultValue="lucy"
        style={{
          border: "none",
          width: 210,
        }}
        options={[
          {
            value: "jack",
            label: "Jack",
          },

          {
            value: "lucy",
            label: "Lucy",
          },
        ]}
      />
    </Container>
  );
}
