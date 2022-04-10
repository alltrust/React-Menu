import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Button from "../IU/Button";
import SelectedMealItemsContext from "../store/selectedMeals-context";
import MealListItems from "./MealListItems";
import styles from "./ModalWithOverlay.module.css";

const ModalWithOverlay = ({ closeModal }) => {
  const selectedMealCtx = useContext(SelectedMealItemsContext);
  const p = selectedMealCtx.mealAmount;
  const mealsAmount = p.toFixed(2);

  const Overlay = () => {
    return <div className={styles.overlay} onClick={closeModal}></div>;
  };
  const Modal = () => {
    return (
      <div className={styles.modal}>
        <div>
          <MealListItems />
          <div>{mealsAmount}</div>
        </div>
        <Button onClick={closeModal}>CLOSE</Button>
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
