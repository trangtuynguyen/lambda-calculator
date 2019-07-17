import React from "react";


const NumberButton = (props) => {
  return (
    <button style={{background: "blue", height: "20px", width: "20px"}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;

