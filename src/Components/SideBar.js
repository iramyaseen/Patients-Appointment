import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarOutlined,
  InsertRowAboveOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logoImage from "../assets/Logo.png";
const { Sider } = Layout;

const menuItmes = [
  { key: "overview", label: "Overview", icon: <InsertRowAboveOutlined /> },
  { key: "Appointment", label: "Appointment", icon: <CalendarOutlined /> },
  { key: "My Pateints", label: "My Pateints", icon: <UserOutlined /> },

  {
    key: "Message",
    label: "Message",
    icon: <MessageOutlined />,
  },
];
// const items = [
//   OverviewIcon,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   icon: React.createElement(icon),
//   label: name[index + 0],
// }));

const SideBarComponent = () => {
  const navigate = useNavigate();
  const clickFun = (e) => {
    const keyValue = e.key;
    switch (keyValue) {
      case "My Pateints":
        navigate("/patient");
        break;
      case "overview":
        navigate("/");
        break;
      default:
        console.log("Okkk");
        break;
    }
  };
  return (
    <Layout>
      <Sider
        style={{
          background: "white",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <img src={logoImage} alt="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={menuItmes}
          onClick={clickFun}
        />
      </Sider>
    </Layout>
  );
};
export default SideBarComponent;
