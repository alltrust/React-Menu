import { useContext, useState } from "react";
import React from "react";
import Button from "../IU/Button";
import MealListItems from "./MealListItems";
import MealSubmit from "./MealSubmit";
import ModalWithOverlay from "./ModalWithOverlay";
import styles from './ModalWithOverlay.module.css'
import SelectedMealItemsContext from "../store/selectedMeals-context";


const Checkout = ({closeModal}) => {
  const [fullFormModal, setFullFormModal] = useState(false);
  const selectedMealCtx = useContext(SelectedMealItemsContext);
  const p = selectedMealCtx.mealAmount;
  const mealsAmount = p.toFixed(2);

  const handleData = (data) => {
    console.log(data);
  };

  const extendFormHandler = () => {
    if (mealsAmount !== "0.00") {
      setFullFormModal(true);
    }
  };

  const stretchFormModal = fullFormModal
    ? `${styles.fullModal}`
    : '';

  return (
    <ModalWithOverlay closeModal={closeModal} >
      <div  className={stretchFormModal}>
        <div>
          <MealListItems />
          <div>{mealsAmount}</div>
        </div>
        <Button onClick={closeModal}>CLOSE</Button>
        <Button onClick={extendFormHandler}>Submit Order</Button>
        {fullFormModal ? (
          <MealSubmit onData={handleData} />
        ) : (
          <p>please select a meal</p>
        )}
      </div>
    </ModalWithOverlay>
  );
};

export default Checkout;
