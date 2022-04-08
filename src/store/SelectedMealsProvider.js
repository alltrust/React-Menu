import React,{useReducer} from 'react';
import SelectedMealItemsContext from './selectedMeals-context';



const SelectedMealItemsProvider = ({ children }) => {
 

  const addMealsHandler = (meals) => {};
  const removeMealsHandler = (id) => {};

  const selectedMealItemsContext = {
    meals: [],
    mealAmount: 0,
    addMeals: addMealsHandler,
    removeMeals: removeMealsHandler,
  };

  return (
    <SelectedMealItemsContext.Provider value={selectedMealItemsContext}>
      {children}
    </SelectedMealItemsContext.Provider>
  );
};
export default SelectedMealItemsProvider
