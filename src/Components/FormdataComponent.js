import React, { useState } from "react";
import { connect } from "react-redux";

export const FormdataComponent = ({ submitit }) => {
  const [name, setname] = useState("");
  const [name2, setname2] = useState("");
  return (
    <div
      style={{
        background: "red",
        color: "white",
        fontSize: "30px",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        value={name2}
        onChange={(e) => setname2(e.target.value)}
      />
      <button
        onClick={() => {
          submitit(name, name2);
        }}
      >
        Submit it
      </button>
    </div>
  );
};

const mapDispathToProps = (dispatch) => {
  return {
    submitit: (name, name2) => {
      dispatch({
        type: "SUBMIT",
        payload: { firstname: name, secondname: name2 },
      });
    },
  };
};

export default connect(null, mapDispathToProps)(FormdataComponent);
