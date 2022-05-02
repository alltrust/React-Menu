import React from "react";


const MealInputWithLabel = React.forwardRef(({ meal, id }, ref) => {
  
    return (
      <div>
        <label htmlFor={id}>Amount</label>
        <input
          ref={ref}
          id={id}
          meal={meal}
          min="1"
          type="number"
        ></input>
      </div>
    );
  });
  export default MealInputWithLabel;