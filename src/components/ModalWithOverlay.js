import React from 'react';
import ReactDOM from "react-dom";
import Button from '../IU/Button';
import styles from './ModalWithOverlay.module.css'

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

  export default ModalWithOverlay