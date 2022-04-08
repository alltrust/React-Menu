import React from "react";


const MealInputWithLabel = ({ meal, mealAmount, handleAmountInput }) => {
    console.log("meal item reached");
  
    return (
      <div>
        <label htmlFor={meal.id}>Amount</label>
        <input
          // ref={ref}
          onChange={handleAmountInput}
          id={meal.id}
          meal={meal}
          min="1"
          value={mealAmount}
          type="number"
        ></input>
      </div>
    );
  };
  export default MealInputWithLabel;