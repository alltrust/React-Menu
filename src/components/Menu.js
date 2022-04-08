import React from "react";
import FormInput from "./FormInput";
import styles from './Menu.module.css'

const Menu = () => {
    console.log("menu");
    const DUMMY_DATA = [
      {
        id: 1,
        food: "Sushi",
        description: "Raw fish, fresh fish",
        price: 22.99,
      },
      {
        id: 2,
        food: "Schnitzel",
        description: "The German Special",
        price: 16.5,
      },
      {
        id: 3,
        food: "Beef burger",
        description: "100% beeeef",
        price: 15.99,
      },
      {
        id: 4,
        food: "Nacatamale",
        description: "Tamales, Nica style",
        price: 18.99,
      },
    ];
    const mealItems = DUMMY_DATA;
  
    return (
      <div className={styles.menuMealItems}>
        <ul>
          {mealItems.map((meal) => {
            return (
              <div key={meal.id} meal={meal} className={styles.mealItem}>
                <h4>{meal.food}</h4>
                <div>{meal.description}</div>
                <div>{meal.price}</div>
                <FormInput meal={meal} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  };

  export default Menu;