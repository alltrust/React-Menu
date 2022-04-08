import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./App.module.css";
import SelectedMealItemsProvider from "./store/SelectedMealsProvider";

function App() {
  console.log("app");
  return (
    <div className={styles.App}>
      <SelectedMealItemsProvider>
        <Header />
        <Main />
      </SelectedMealItemsProvider>
    </div>
  );
}

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  console.log("header");
  return (
    <div className={styles.mainHeader}>
      <h1>React Meals</h1>
      <Button
        className={`${styles.button} ${styles.buttonLarge}`}
        type="button"
        onClick={showModalHandler}
      >
        CART <span>#</span>
      </Button>
      {showModal && <ModalWithOverlay closeModal={closeModalHandler} />}
    </div>
  );
};

const ModalWithOverlay = ({ closeModal }) => {
  const Overlay = () => {
    return <div className={styles.overlay} onClick={closeModal}></div>;
  };
  const Modal = () => {
    return (
      <div className={styles.modal}>
        <div>
          <h3>price</h3>
          <h3>name</h3>
          <h3>amount</h3>
        </div>
        <Button onClick={closeModal}>CLOSE</Button>
      </div>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
    </React.Fragment>
  );
};

const Button = ({ type, children, className, onClick }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

const Main = () => {
  console.log("main");
  return (
    <div>
      <div className={styles.content}>
        <h2 className={styles.contentHeading}>About React Meals</h2>
        <p>
          Once you order from our Meals Menu, you will want more. So definately
          order multiple right off the bat.
        </p>
        <p>
          Normally Lorem Ipsum would do the trick, but I encourage you to select
          some items and see for yourself.
        </p>
      </div>
      <Menu />
    </div>
  );
};

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

//CONTEXT & CONTEXT PROVIDER

//ENd of create component

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

export default App;
