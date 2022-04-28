import React, { useState } from "react";

const UseSubmit = (validateValue) => {
  const [userInput, setUserInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputValid = validateValue(userInput)
  const inputIsInvalid = !inputValid && isTouched;

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };
  const userInputTouchedHandler = () => {
    setIsTouched(true);
  };
  const resetHandler = ()=>{
    setIsTouched(false);
    setUserInput('')
  };

  return {
      value: userInput,
      inputValid,
      inputIsInvalid,
      inputChangeHandler,
      userInputTouchedHandler,
      resetHandler
  };
};

export default UseSubmit;
