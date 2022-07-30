import React from "react";
import classes from './Drawer.module.css';

const Drawer = (props) => {
  return (
    <>
      <div className={`${classes.overlay} ${props.showCart ? 'block' : 'hidden'}`} onClick={props.onHideCart}></div>
      <aside className={`${classes.drawer} ${props.showCart ? "translate-x-0" : "translate-x-full"}`}>
        {props.children}
      </aside>
    </>
  );
};

export default Drawer;
