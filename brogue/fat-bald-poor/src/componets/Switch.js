import React from "react";
import Icon from "../componets/icon";

const Switch = (props) => {
  const { onClick, active, label, id } = props;
  return (
    <div
      onClick={() => {
        onClick(id);
      }}
      className={`items ${active ? "on" : "off"}`}
    >
      <label>{label}</label> <Icon id="switch" />
    </div>
  );
};

export default Switch;
