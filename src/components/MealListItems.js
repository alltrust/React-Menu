import React, { useContext } from "react";
import SelectedMealItemsContext from "../store/selectedMeals-context";
import styles from "./MealListItems.module.css";
import Button from "../UI/Button";


const MealListItems = ({}) => {
  const selectedMealCtx = useContext(SelectedMealItemsContext);

  const handleAddMeal = (meal) => {
    selectedMealCtx.addMeals({...meal, amount:1});
  };

  const handleRemoveMeal =(meal)=>{
    selectedMealCtx.removeMeals({ ...meal, amount: 1});
    console.log(selectedMealCtx.meals)
  } 


  return (
    <div>
      {selectedMealCtx.meals.map((meal) => {
        return (
          <div className={styles["meal-item"]} key={Math.random(meal.key)}>
            <li>{meal.name}</li>
            <li>{meal.price}</li>
            <div className={styles["meal-amount-selected"]}>
              <Button onClick={handleRemoveMeal.bind(null, meal)} >-</Button>
              <li>{meal.amount}</li>
              <Button onClick={handleAddMeal.bind(null, meal)}>+</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MealListItems;
