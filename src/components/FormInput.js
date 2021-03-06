import React, { useRef, useContext, useState } from "react";
import MealInputWithLabel from "../UI/MealInputWithLabel";
import Button from "../UI/Button";
import styles from "./FormInput.module.css";
import SelectedMealItemsContext from "../store/selectedMeals-context";

const FormInput = ({ meal, id }) => {
  const mealAmountRef = useRef();
  const [validInput, setValidInput] = useState(true);

  const selectedMealCtx = useContext(SelectedMealItemsContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const mealInputAmount = mealAmountRef.current.value;
    const mealNumAmount = +mealInputAmount;

    if (mealInputAmount < 1) {
      setValidInput(false);
      return;
    }

    selectedMealCtx.addMeals({
      key: id,
      id: id,
      name: meal.food,
      price: meal.price,
      amount: mealNumAmount,
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <MealInputWithLabel meal={meal} id={id}  ref={mealAmountRef} />
      <Button type="submit" className={`${styles.button}${styles.buttonSmall}`}>
        Add to Cart
      </Button>
    </form>
  );
};

export default FormInput;
