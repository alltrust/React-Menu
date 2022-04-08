import React,{useState, useContext} from 'react';
import styles from './Header.module.css'
import Button from '../IU/Button';
import ModalWithOverlay from './ModalWithOverlay';
import SelectedMealItemsContext from '../store/selectedMeals-context';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const selectedMealCtx= useContext(SelectedMealItemsContext)

    const numOfMealsInCart = selectedMealCtx.meals.length
  
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
          CART <span>{numOfMealsInCart}</span>
        </Button>
        {showModal && <ModalWithOverlay closeModal={closeModalHandler} />}
      </div>
    );
  };

  export default Header