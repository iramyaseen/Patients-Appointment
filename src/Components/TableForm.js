import React, { useEffect, useState } from "react";
import { Avatar, Table, Typography } from "antd";
import { ActionShowComponent } from "./ActionShow";
import { getFormValues } from "redux-form";
import { connect, useSelector } from "react-redux";
const TableForm = ({ numberOfValue }) => {
  var selector = useSelector((state) => state.cartReducer.numOfItems);
  const imageSector = useSelector((state) => state.cartReducer.numOfImages);
  const TableData = selector.map((reuxData, index) => ({
    key: index,
    PatientsName: reuxData.PatientsName,
    VisitId: reuxData.VisitId,
    Date: reuxData.Date,
    Gender: reuxData.Gender,
    Diseases: reuxData.Diseases,
    Payment: reuxData.Payment,
    Status: "Out-patient",
    name2: imageSector,
    Action: <ActionShowComponent />,
  }));
  const column = [
    {
      title: "Patients name",
      dataIndex: "PatientsName",
      key: "PatientsName",
      render: (text, key) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={<img src={TableData[key.key].name2[key.key]} alt="avatar" />}
          />
          <Typography style={{ paddingLeft: "20px" }}>{text}</Typography>
        </div>
      ),
    },
    {
      title: "Visit Id",
      dataIndex: "VisitId",
      key: "VisitId",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
    },
    {
      title: "Diseases",
      dataIndex: "Diseases",
      key: "Diseases",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
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
