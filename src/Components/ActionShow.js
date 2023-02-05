import React from "react";
import { Dropdown, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "Log Consulting",
    icon: <DownloadOutlined />,
  },
  {
    key: "2",
    label: "Message",
    icon: <DownloadOutlined />,
  },
];
export const ActionShowComponent = () => {
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
      >
        <Typography>
          <DownloadOutlined />
        </Typography>
      </Dropdown>
    </div>
  );
};
