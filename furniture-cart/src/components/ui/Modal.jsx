import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={`${classes.overlay} ${props.isOrder ? 'block' : 'hidden'}`} onClick={props.hideModal}></div>
      <div className={`${classes.modal} ${props.isOrder ? 'scale-1' : 'scale-0'}`}>
        <div className={classes.content}>
          <h3 className={classes.heading}>{props.title}</h3>
          <p className={classes.message}>{props.message}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
