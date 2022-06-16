import React, { useState, useContext, useEffect } from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button";
import Checkout from "./Checkout";
import SelectedMealItemsContext from "../store/selectedMeals-context";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [btnJump, setbtnJump] = useState(false);
  const selectedMealCtx = useContext(SelectedMealItemsContext);

  const numOfMealsInCart = selectedMealCtx.meals.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  useEffect(() => {
      setbtnJump(true);
    const timer = setTimeout(() => {
      setbtnJump(false);
    }, 300);
    return()=>{
        clearTimeout(timer)
    }
  }, [selectedMealCtx.meals]);

  console.log(numOfMealsInCart);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  console.log("header");
  return (
    <div className={styles.mainHeader}>
      <h1>React Meals</h1>
      <Button
        className={`${styles.button} ${styles.buttonLarge} ${btnJump ? styles.jump: ''}`}
        type="button"
        onClick={showModalHandler}
      >
        CART <span>{numOfMealsInCart}</span>
      </Button>
      {showModal && <Checkout closeModal={closeModalHandler} />}
    </div>
  );
};

export default Header;
