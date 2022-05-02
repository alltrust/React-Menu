import React from "react";
import ReactDOM from "react-dom";
import styles from "./ModalWithOverlay.module.css";

const ModalWithOverlay = ({ closeModal, children }) => {


  const Overlay = () => {
    return <div className={styles.overlay} onClick={closeModal}></div>;
  };


  const Modal = ({children}) => {
    return (
      <div className={styles.modal}>
        <div>{children}</div>
      </div>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay closeModal={closeModal}/>, document.getElementById("overlay"))}
      {ReactDOM.createPortal(<Modal closeModal={closeModal}>{children}</Modal>, document.getElementById("modal"))}
    </React.Fragment>
  );
};

export default ModalWithOverlay;
