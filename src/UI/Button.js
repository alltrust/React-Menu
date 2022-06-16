import React from "react";
import styles from './Button.module.css'

const Button = ({ type, children, className, onClick, disabled }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
