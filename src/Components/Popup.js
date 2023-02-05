import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="popup-box-container">{props.content}</div>
    </div>
  );
};

export default Popup;
