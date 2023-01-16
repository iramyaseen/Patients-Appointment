import "./App.css";
import { HeaderComponent } from "./Components/HeaderComponent";
import { Col, Row } from "antd";
import SideBarComponent from "./Components/SideBar";
import TableComponent from "./Components/TableComponent";
import { SubBodyComponent } from "./Components/SubBodyComponent";
import { FormdataComponent } from "./Components/FormdataComponent";

function App() {
  return (
    <div>
      <Row>
        <Col span={4}>
          <SideBarComponent />
        </Col>
        <Col span={20} style={{ background: "#f9f9f9", paddingLeft: "30px" }}>
          <HeaderComponent />
          <SubBodyComponent />
          <TableComponent />
        </Col>
      </Row>
      <FormdataComponent />
    </div>
  );
}

export default App;
