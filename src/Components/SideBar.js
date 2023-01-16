import React from "react";
import { ReactComponent as OverviewIcon } from "../assets/svg/overview_icon.svg";
import { ReactComponent as AppointmentIcons } from "../assets/svg/appointment.svg";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logoImage from "../assets/Logo.png";
const { Footer, Content } = Layout;
const { Sider } = Layout;
const name = [
  "Overview",
  "Appointment",
  "My Pateints",
  "Schedule Timings",
  "Payments",
  "Message",
  "Blog",
  "Setting",
].map((items) => items);
const items = [
  OverviewIcon,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  icon: React.createElement(icon),
  label: name[index + 0],
}));
const SideBarComponent = () => {
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
        <Menu mode="inline" defaultSelectedKeys={["4"]} items={items} />
      </Sider>
    </Layout>
  );
};
export default SideBarComponent;
