import React from "react";
import styles from './Main.module.css'
import Menu from "./Menu";

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

  export default Main;