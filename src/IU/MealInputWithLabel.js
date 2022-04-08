import React from "react";


const MealInputWithLabel = React.forwardRef(({ meal }, ref) => {
    console.log("meal item reached");
  
    return (
      <div>
        <label htmlFor={meal.id}>Amount</label>
        <input
          ref={ref}
          id={meal.id}
          meal={meal}
          min="1"
          type="number"
        ></input>
      </div>
    );
  });
  export default MealInputWithLabel;