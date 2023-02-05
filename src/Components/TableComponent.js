import React from "react";
import image from "../assets/avatar.jpeg";
import { Avatar, Table, Typography } from "antd";
const { Column } = Table;
const today = Date.now();
const date = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(today);

const TableComponent = () => {
  const data = [
    {
      key: "1",
      patientID: "post",
      date: date,
      gender: "Male",
      dieases: "Diabetes",
      status: "Out-Patiend",
      image: image,
    },
    {
      key: "2",
      patientID: "OPD-4336",
      date: date,
      gender: "Male",
      dieases: "Diabetes",
      status: "Out-Patiend",
      image: image,
    },
    {
      key: "3",
      patientID: "OPD-4336",
      date: date,
      gender: "Male",
      dieases: "Diabetes",
      status: "Out-Patiend",
      image: image,
    },
  ];
  const column = [
    {
      title: "Patients name",
      dataIndex: "image",
      key: "patient",
      render: (text, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar src={image} />
          <Typography style={{ paddingLeft: "20px" }}>Deveon Lane</Typography>
        </div>
      ),
    },
    {
      title: "Visit Id",
      dataIndex: "patientID",
      key: "patientID",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Diseases",
      dataIndex: "dieases",
      key: "dieases",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <Table
      style={{ marginTop: "30px", width: "100%" }}
      columns={column}
      dataSource={data}
    />
  );
};

export default TableComponent;
