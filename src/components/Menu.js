import React, { useEffect, useCallback, useState } from "react";
import FormInput from "./FormInput";
import styles from "./Menu.module.css";

const Menu = () => {
  const [currMealItems, setCurrMealItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  console.log("menu");
 
  const getDataHandler = useCallback(async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch(
        "https://menu-project-c21a5-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("There was an error");
      }
      const data = await response.json();
      console.log(data)

      const mealsItemsData = [];
      for(let key in data){
        console.log(key)
        mealsItemsData.push({id:key, data: data[key]})
      }

      setCurrMealItems(mealsItemsData)
      
    } catch (error) {
      setIsLoading(false)
      setIsError(error.message);
    }
    setIsLoading(false)
  }, []);

  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);

  console.log(currMealItems)

const loadingMsg = "Gathering your delicious meals, please wait...";

  return (
    <div className={styles.menuMealItems}>
      <ul>
        {isLoading && <p>{loadingMsg}</p>}
        {isError && <p>{isError}</p>}
        {currMealItems.map((meal) => {
          return (
            <div key={meal.id} id={meal.id} meal={meal.data} className={styles.mealItem}>
              <h4>{meal.data.food}</h4>
              <div>{meal.data.description}</div>
              <div>{meal.data.price}</div>
              <FormInput meal={meal.data} id={meal.id} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
