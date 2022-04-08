import React from 'react'

const SelectedMealItemsContext = React.createContext({
    meals: [],
    mealAmount: 0,
    addMeals: ()=>{},
    removeMeals: ()=>{},
  });

  export default SelectedMealItemsContext