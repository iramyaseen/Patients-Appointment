import { Button, Input } from "antd";
import React from "react";
import Container from "react-bootstrap/Container";

import { Field, Form, reduxForm } from "redux-form";

const PopupForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, register } = props;
  const onChangeHandle = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };
  const onLoad = (fileString) => {
    let image = localStorage.getItem("image");
    let arrayofImages = JSON.parse(image);
    arrayofImages = [...arrayofImages, fileString];
    localStorage.setItem("image", JSON.stringify(arrayofImages));
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  return (
    <Form name="form_item_path " layout="vertical" onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <label className="label-name">Patients Name</label>
          <Field
            name="PatientsName"
            component="input"
            type="text"
            placeholder="Jhone"
            style={{
              height: "47px",
              width: "88%",
              paddingLeft: "10px",
              marginTop: "5px",
            }}
          />
        </div>
        <div>
          <label className="label-name">Visit Id </label>
          <Field
            name="VisitId"
            component="input"
            type="text"
            placeholder="1231234"
            style={{
              width: "100%",
              height: "47px",
              paddingLeft: "10px",
              marginTop: "5px",
            }}
          />
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label className="label-name">Date</label>
        <br />
        <Field
          name="Date"
          component="input"
          type="date"
          placeholder="3245 Wastheimer Rd. Santa Ans, lllinois 3425"
          style={{
            height: "47px",
            width: "100%",
            paddingLeft: "10px",
            paddingRight: "20px",
            marginTop: "5px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <label className="label-name">Gender</label>
          <Field
            name="Gender"
            component="input"
            type="text"
            placeholder="Enter Your Gender"
            style={{
              height: "47px",
              width: "110%",
              paddingLeft: "10px",
              marginTop: "5px",
            }}
          />
        </div>
        <div>
          <label className="label-name">Diseases </label>
          <Field
            name="Diseases"
            component="input"
            type="text"
            placeholder="Enter Your Diseases Here"
            style={{
              width: "100%",
              height: "47px",
              paddingLeft: "10px",
              marginTop: "5px",
            }}
          />
        </div>
      </div>
      <div>
        <label className="label-name">Payment</label>
        <br />
        <Field
          name="Payment"
          component="input"
          placeholder="Which Payment Method Your Use"
          style={{
            height: "40px",
            width: "100%",
            marginBottom: "20px",
            paddingLeft: "10px",
            marginTop: "5px",
          }}
        />
      </div>
      <Container style={{ marginBottom: "20px", width: "100%" }}>
        <label className="label-name">Image</label>
        <Input
          style={{
            paddingLeft: "10px",
            height: "47px",
            paddingTop: "11px",
            marginTop: "5px",
          }}
          type="file"
          onChange={onChangeHandle}
        />
      </Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={pristine || submitting}
          className="save-btn"
        >
          Save
        </Button>
        <Button type="primary" htmlType="submit" className="cancel-btn">
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "profileUpdate", // a unique identifier for this form
  destroyOnUnmount: false,
})(PopupForm);
