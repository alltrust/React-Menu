import React, { useContext } from "react";
import SelectedMealItemsContext from "../store/selectedMeals-context";
import styles from "./MealListItems.module.css";
import Button from "../IU/Button";

const MealListItems = ({}) => {
  const selectedMealCtx = useContext(SelectedMealItemsContext);

  return (
    <div>
      {selectedMealCtx.meals.map((meal) => {
        return (
          <div className={styles["meal-item"]} key={Math.random(meal.key)}>
            <li>{meal.name}</li>
            <li>{meal.price}</li>
            <Button>-</Button>
            <li>{meal.amount}</li>
            <Button>+</Button>
          </div>
        );
      })}
    </div>
  );
};

export default MealListItems;
