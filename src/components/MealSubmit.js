import React from "react";
import Button from "../IU/Button";
import UseSubmit from "../hooks/use-submit";

import styles from "./MealSubmit.module.css";

const MealSubmit = ({ selectedMeal, addOrderHandler }) => {


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

  if (nameInputValid && addressInputValid) {
    formIsValid = true;
  };
  


  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    };

    const mealData = {
      orderNumber: Date.now(),
      orderName: userNameInput,
      orderAddress: userAddressInput,
      orderAmount: selectedMeal.mealAmount,
      orderData: selectedMeal.meals,
    };

    console.log(mealData);



    addOrderHandler(mealData);
    selectedMeal.clearCart();
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
