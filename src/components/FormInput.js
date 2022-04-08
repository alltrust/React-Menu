import React,{useState} from "react";
import MealInputWithLabel from "../IU/MealInputWithLabel";
import Button from "../IU/Button";
import styles from './FormInput.module.css'

const FormInput = ({ meal }) => {
    const [mealAmount, setMealAmount] = useState({});
    // const mealAmountRef = React.createRef()
  
    // const onSaveMeals=()=>{
    //   mealsContext.addMeals({
    //     id: meal.id,
    //     name:meal.food,
    //     price:meal.price,
    //     amount:mealAmount
    //   })
    // }
  
    const handleAmountInput = (event) => {
      setMealAmount(event.target.value);
    };
  
    const onSubmitHandler = (event) => {
      event.preventDefault();
      const selectedMealItems = {
        meal: meal,
        mealAmount: mealAmount,
      };
      console.log(selectedMealItems);
      // onSaveMeals(selectedMealItems);
    };
    return (
      <form onSubmit={onSubmitHandler}>
        <MealInputWithLabel
          handleAmountInput={handleAmountInput}
          value={mealAmount}
          meal={meal}
          // ref={mealAmountRef}
        />
        <Button type="submit" className={`${styles.button}${styles.buttonSmall}`}>
          Add to Cart
        </Button>
      </form>
    );
  };

  export default FormInput;