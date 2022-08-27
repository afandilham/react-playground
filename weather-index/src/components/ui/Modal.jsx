import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const portalElement = document.getElementById("modal");

  return createPortal(
    <>
      <div className={`${classes.overlay} ${props.isOpen ? classes.block : classes.hidden}`} onClick={props.hideModal}></div>
      <dialog open={props.isOpen} className={classes.modal}>
        {props.children}
      </dialog>
    </>,
    portalElement
  );
};

export default Modal;
