import { useContext, useState, useCallback } from "react";
import React from "react";
import Button from "../UI/Button";
import MealListItems from "./MealListItems";
import MealSubmit from "./MealSubmit";
import ModalWithOverlay from "./ModalWithOverlay";
import styles from "./ModalWithOverlay.module.css";
import SelectedMealItemsContext from "../store/selectedMeals-context";

const Checkout = ({ closeModal }) => {
  const [fullFormModal, setFullFormModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const selectedMealCtx = useContext(SelectedMealItemsContext);
  const p = selectedMealCtx.mealAmount;
  const mealsAmount = p.toFixed(2);

  const addOrderHandler = useCallback(async (data) => {
      setIsLoading(true);
      setIsError(null)
    try {
      const response = await fetch(
        "https://menu-project-c21a5-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("response is not ok");
      }
    } catch (e) {
      setIsError(e.message);
    };
    setIsLoading(false);
    setIsError(false)
  }, []);

  const extendFormHandler = () => {
    if (mealsAmount !== "0.00") {
      setFullFormModal(true);
    }
  };

  const stretchFormModal = fullFormModal ? `${styles.fullModal}` : "";

  return (
    <ModalWithOverlay closeModal={closeModal}>
      <div className={stretchFormModal}>
        <div>
          <MealListItems />
          <div>{mealsAmount}</div>
        </div>
        <Button onClick={closeModal}>CLOSE</Button>
        <Button onClick={extendFormHandler}>Submit Order</Button>
        {fullFormModal ? (
          <MealSubmit
            addOrderHandler={addOrderHandler}
            selectedMeal={selectedMealCtx}
            isLoading={isLoading}
            isError={isError}
          />
        ) : (
          <p>please select a meal</p>
        )}
      </div>
    </ModalWithOverlay>
  );
};

export default Checkout;
