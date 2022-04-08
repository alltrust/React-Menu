import React,{useRef, useContext, useState} from "react";
import MealInputWithLabel from "../IU/MealInputWithLabel";
import Button from "../IU/Button";
import styles from './FormInput.module.css'
import SelectedMealItemsContext from "../store/selectedMeals-context";

const FormInput = ({ meal}) => {
    const mealAmountRef = useRef();
    const [validInput, setValidInput] = useState(true)

    
    const selectedMealCtx = useContext(SelectedMealItemsContext)

  

    const onSubmitHandler = (event) => {
      event.preventDefault();

      const mealInputAmount = mealAmountRef.current.value
      const mealNumAmount = +mealInputAmount
      console.log(meal);

      if(mealInputAmount<1){
        setValidInput(false)
        return
      }

      selectedMealCtx.addMeals({
        id: meal.id,
        name: meal.food,
        price: meal.price,
        amount:mealNumAmount
      })
    };
    console.log(selectedMealCtx)
    return (
      <form onSubmit={onSubmitHandler}>
        <MealInputWithLabel
          meal={meal}
          ref={mealAmountRef}
        />
        <Button type="submit" className={`${styles.button}${styles.buttonSmall}`}>
          Add to Cart
        </Button>
      </form>
    );
  };

  export default FormInput;