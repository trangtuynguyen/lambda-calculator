import React from "react";
import { useState } from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const[numsArray, setNumber] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
        numsArray.map(num => (<NumberButton number={num}/>))
       }
    </div>
  );
};
