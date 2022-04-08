import React from "react";
import styles from './Button.module.css'

const Button = ({ type, children, className, onClick }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
