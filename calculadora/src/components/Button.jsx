import React from "react";
import "./Button.css";

// se a propriedade for passa aplica a classe se não aplique vazio ''

export default (props) => (
  <button
  onClick={e=> props.click && props.click(props.label)}
    className={`
button
${props.operation ? "operation" : ""} 
${props.double ? "double" : ""}
${props.triple ? "triple" : ""}
`}
  >
    {props.label}
  </button>
);
