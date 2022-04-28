import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../IU/Button";
import SelectedMealItemsContext from "../store/selectedMeals-context";
import MealListItems from "./MealListItems";
import styles from "./ModalWithOverlay.module.css";
import MealSubmit from "./MealSubmit";

const ModalWithOverlay = ({ closeModal }) => {
  const [fullFormModal, setFullFormModal] = useState(false);
  const selectedMealCtx = useContext(SelectedMealItemsContext);
  const p = selectedMealCtx.mealAmount;
  const mealsAmount = p.toFixed(2);

  const Overlay = () => {
    return <div className={styles.overlay} onClick={closeModal}></div>;
  };


  const extendFormHandler = () => {
    if (mealsAmount !== "0.00") {
      setFullFormModal(true);
    }
  };

  const stretchFormModal = fullFormModal
    ? `${styles.modal} ${styles.fullModal}`
    : styles.modal;

  const Modal = () => {
    return (
      <div className={stretchFormModal}>
        <div>
          <MealListItems />
          <div>{mealsAmount}</div>
        </div>
        <Button onClick={closeModal}>CLOSE</Button>
        <Button onClick={extendFormHandler}>Submit Order</Button>
        {fullFormModal ? <MealSubmit />: <p>please select a meal</p>}
      </div>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
    </React.Fragment>
  );
};

export default ModalWithOverlay;
