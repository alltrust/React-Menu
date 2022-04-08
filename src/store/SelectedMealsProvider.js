import React,{useReducer} from 'react';
import SelectedMealItemsContext from './selectedMeals-context';


const mealReducer= (state, action)=>{
  switch (action.type){
    case "ADD":
      const updatedMeals = state.meals.concat(action.payload)
      const updatedTotalAmount = state.totalAmount + action.payload.amount * action.payload.price
      return{
        meals: updatedMeals,
        totalAmount: updatedTotalAmount
      }
    case "REMOVE":
      return
    default:
      throw new Error("check again")
  }

}
const SelectedMealItemsProvider = ({ children }) => {
  const [mealState, dispatchMealAction] = useReducer(mealReducer, {
    meals:[],
    totalAmount: 0
  })
 

  const addMealsHandler = (meal) => {
    dispatchMealAction({type: "ADD", payload: meal})
  };
  const removeMealsHandler = (id) => {
    dispatchMealAction({type: "REMOVE", payload: id})
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
export default SelectedMealItemsProvider
