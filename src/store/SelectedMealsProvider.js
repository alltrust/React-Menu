import React, { useReducer } from "react";
import SelectedMealItemsContext from "./selectedMeals-context";

const mealReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.payload.amount * action.payload.price;

      const mealItemIndex = state.meals.findIndex(
        (meal) => meal.id === action.payload.id
      );
      const mealItemExists = state.meals[mealItemIndex];
      let updatedMealItem;
      let updatedMealsArray;

      if (mealItemExists) {
        updatedMealItem = {
          ...mealItemExists,
          amount: mealItemExists.amount + action.payload.amount,
        };
        updatedMealsArray = [...state.meals];
        updatedMealsArray[mealItemIndex] = updatedMealItem;
      } else {
        updatedMealItem = { ...action.payload };
        updatedMealsArray = state.meals.concat(updatedMealItem);
      }

      return {
        meals: updatedMealsArray,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE":{
      const mealItemIndex = state.meals.findIndex((meal)=> meal.id === action.payload.id);
      const mealItemExists = state.meals[mealItemIndex]
      const updatedTotalAmount = state.totalAmount - mealItemExists.price;
      let updatedMealsArray;
      if(mealItemExists.amount === 1){
         updatedMealsArray = state.meals.filter((meal)=> meal.id !== action.payload)
      }else{
        const updatedMealItem = {...mealItemExists, amount: mealItemExists.amount -1};
        updatedMealsArray = [...state.meals]
        updatedMealsArray[mealItemIndex] = updatedMealItem;
      }
      return{
        meals:updatedMealsArray,
        totalAmount:updatedTotalAmount
      };
    }

     
    default:
      throw new Error("check again");
  }
};
const SelectedMealItemsProvider = ({ children }) => {
  const [mealState, dispatchMealAction] = useReducer(mealReducer, {
    meals: [],
    totalAmount: 0,
  });

  const addMealsHandler = (meal) => {
    dispatchMealAction({ type: "ADD", payload: meal });
  };
  const removeMealsHandler = (meal) => {
    dispatchMealAction({ type: "REMOVE", payload: meal });
  };

  const selectedMealItemsContext = {
    meals: mealState.meals,
    mealAmount: mealState.totalAmount,
    addMeals: addMealsHandler,
    removeMeals: removeMealsHandler,
  };

  return (
    <SelectedMealItemsContext.Provider value={selectedMealItemsContext}>
      {children}
    </SelectedMealItemsContext.Provider>
  );
};
export default SelectedMealItemsProvider;
