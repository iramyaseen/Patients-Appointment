import React, { useEffect, useState } from "react";
import image from "../assets/avatar.jpeg";
import { Avatar, Table, Typography } from "antd";
import { ActionShowComponent } from "./ActionShow";
import { formValues, formValueSelector, getFormValues } from "redux-form";
import { connect, useSelector } from "react-redux";
const today = Date.now();
const date = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(today);
const TableForm = ({ numberOfValue }) => {
  const selector = useSelector((state) => state.cartReducer.numOfItems);
  const imageSector = useSelector((state) => state.cartReducer.numOfImages);

  const TableData = selector.map((reuxData, index) => ({
    key: { index },
    patientID: reuxData.lastName,
    name2: imageSector,
    userName: reuxData.firstName,
    // date: date,
    // gender: "Male",
    // dieases: "Diabetes",
    // status: "Out-Patiend",
    // Payment: "Private Cash",
    // Action: <ActionShowComponent />,
  }));
  const column = [
    {
      title: "Patients name",
      dataIndex: "userName",
      key: "userName",
      render: (text, key) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={
              <img
                src={TableData[key.key.index].name2[key.key.index]}
                alt="avatar"
              />
            }
          />
          <Typography style={{ paddingLeft: "20px" }}>{text}</Typography>
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
    {
      title: "Payment",
      dataIndex: "Payment",
      key: "Payment",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
    },
  ];

  return (
    <>
      <Table
        style={{ marginTop: "30px", width: "100%" }}
        columns={column}
        dataSource={TableData}
        pagination={{
          pageSize: numberOfValue,
        }}
      />
    </>
  );
};

export default connect((state) => ({
  values: getFormValues("profileUpdate")(state),
}))(TableForm);
