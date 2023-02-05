import { Button, Dropdown, Input } from "antd";
import React, { useRef, useState } from "react";
import { Field, Form, reduxForm } from "redux-form";

const PopupForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, register } = props;
  const [isOpen, setIsOpen] = useState(false);
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
  // File Input code
  const adaptFileEventToValue = (delegate) => (e) =>
    delegate(e.target.files[0]);
  const FileInput = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps },
    meta: omitMeta,
    ...props
  }) => {
    return (
      <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...props.input}
        {...props}
      />
    );
  };

  return (
    <Form name="form_item_path" layout="vertical" onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <label>First Name</label>
          <br />
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="Jhone"
            style={{ height: "47px" }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <br />
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Martin"
            style={{ width: "100%", height: "47px" }}
          />
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Location</label>
        <br />
        <Field
          name="location"
          component="input"
          type="text"
          placeholder="3245 Wastheimer Rd. Santa Ans, lllinois 3425"
          style={{ height: "40px" }}
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
          <label>Patient Email</label>
          <br />
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="info@patient.com"
            style={{ height: "40px" }}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
            >
              <Button
                type="primary"
                style={{
                  background: "white",
                  height: "38px",
                  color: "black",
                  border: "1px solid #d9d9d9",
                  marginRight: "10px",
                }}
              >
                85 <DownOutlined />
              </Button>
            </Dropdown> */}
            <Field
              name="number"
              component="input"
              type="text"
              placeholder="21453425"
              style={{ height: "40px" }}
            />
          </div>
        </div>
      </div>
      <div>
        <label>Reason</label>
        <br />
        <Field
          name="reason"
          component="input"
          style={{ height: "100px", marginBottom: "20px" }}
        />
      </div>
      <label>Image</label>
      <Input type="file" onChange={onChangeHandle} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="primary" htmlType="submit" className="save-btn">
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
