import React, { useState } from "react";
import Button from "../IU/Button";
import UseSubmit from "../hooks/use-submit";

import styles from "./MealSubmit.module.css";

const MealSubmit = () => {
  //   const [userInput, setUserInput] = useState("");
  //   const [addressInput, setAddressInput] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);
  //   const [addressIsTouched, setAddressIsTouched] = useState(false);
  const hasNumber = /\d/;

  const {
    value: userNameInput,
    inputValid: nameInputValid,
    inputIsInvalid: nameInputIsInvalid,
    inputChangeHandler: nameChangeHandler,
    userInputTouchedHandler: nameTouchedHandler,
    resetHandler: resetName,
  } = UseSubmit((value) => value.trim() !== "");

  const {
    value: userAddressInput,
    inputValid: addressInputValid,
    inputIsInvalid: addressInputIsInvalid,
    inputChangeHandler: addressChangeHandler,
    userInputTouchedHandler: addressTouchedHandler,
    resetHandler: resetAddress,
  } = UseSubmit((value) => value.match(hasNumber));

  let formIsValid = false;

  //   const inputValid = userInput.trim() !== "";
  //   const inputIsInvalid = !inputValid && isTouched;
  //   const addressValid = addressInput.match(hasNumber);
  //   const addressIsInvalid = !addressValid && addressIsTouched;

  //input state on change,
  //   const inputChangeHandler = (event) => {
  //     setUserInput(event.target.value);
  //   };
  //   const addressChangeHandler = (event) => {
  //     setAddressInput(event.target.value);
  //   };

  //   const userInputTouchedHandler = () => {
  //     setIsTouched(true);
  //   };
  //   const addressTouchedHandler = () => {
  //     setAddressIsTouched(true);
  //   };

  if (nameInputValid && addressInputValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    // setUserInput("");
    // setAddressInput("");
    // setIsTouched(false);
    // setAddressIsTouched(false);
    resetName();
    resetAddress();
  };
  const inputError = nameInputIsInvalid ? styles.errorColor : "";
  const addressError = addressInputIsInvalid ? styles.errorColor : "";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles.mealForm}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            className={inputError}
            onChange={nameChangeHandler}
            onBlur={nameTouchedHandler}
            value={userNameInput}
            id="name"
          ></input>
          {nameInputIsInvalid && <p>Have valid input</p>}
        </div>
        <div>
          <label htmlFor="address">Address </label>
          <input
            className={addressError}
            onChange={addressChangeHandler}
            onBlur={addressTouchedHandler}
            value={userAddressInput}
            id="address"
          ></input>
          {addressInputIsInvalid && <p>Have valid input</p>}
        </div>
      </div>
      <Button disabled={!formIsValid}>Order</Button>
    </form>
  );
};

export default MealSubmit;
