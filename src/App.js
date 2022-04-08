import React, { useState, useContext } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
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

export default App;
