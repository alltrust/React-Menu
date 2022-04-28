import React, { useState } from "react";
import Button from "../IU/Button";

import styles from "./MealSubmit.module.css";

const MealSubmit = () => {
  const [userInput, setUserInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [addressIsTouched, setAddressIsTouched] = useState(false);

  let formIsValid = false;

  const hasNumber = /\d/;

  const inputValid = userInput.trim() !== "";
  const inputIsInvalid = !inputValid && isTouched;
  const addressValid = addressInput.match(hasNumber);
  const addressIsInvalid = !addressValid && addressIsTouched;

  //input state on change,
  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddressInput(event.target.value);
  };

  const userInputTouchedHandler = () => {
    setIsTouched(true);
  };
  const addressTouchedHandler = () => {
    setAddressIsTouched(true);
  };

  if (inputValid && addressValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    if (formIsValid) {
      console.log(userInput);
      console.log(addressInput);
    }

    setUserInput("");
    setAddressInput("");
    setIsTouched(false);
    setAddressIsTouched(false);
  };
  const inputError = inputIsInvalid ? styles.errorColor : "";
  const addressError = addressIsInvalid ? styles.errorColor : "";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles.mealForm}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            className={inputError}
            onChange={inputChangeHandler}
            onBlur={userInputTouchedHandler}
            value={userInput}
            id="name"
          ></input>
          {inputIsInvalid && <p>Have valid input</p>}
        </div>
        <div>
          <label htmlFor="address">Address </label>
          <input
            className={addressError}
            onChange={addressChangeHandler}
            onBlur={addressTouchedHandler}
            value={addressInput}
            id="address"
          ></input>
          {addressIsInvalid && <p>Have valid input</p>}
        </div>
      </div>
      <Button disabled={!formIsValid}>Order</Button>
    </form>
  );
};

export default MealSubmit;
