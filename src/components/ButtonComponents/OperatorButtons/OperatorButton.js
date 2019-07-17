import React from "react";
import { useState } from "react";

const OperatorButton = (props) => {
  return (
    <button style={{background: "tomato", height: "20px", width: "20px"}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.char}

    </button>
  );
};

export default OperatorButton;
