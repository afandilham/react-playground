import React, { useState, useContext } from "react";
import classes from "./CartActions.module.css";
import CartContext from "../../context/cart-context";
import { formatCurrency } from "../../utils/formatCurrency";
import Modal from "../ui/Modal";
import { createPortal } from "react-dom";

const CartActions = (props) => {
  const [ isOrder, setIsOrder ] = useState(false);
  const cartCtx = useContext(CartContext);
  
  return (
    <div className={classes.actions}>
      <div className={classes.summary}>
        <span>Total:</span>
        <span>Rp. {formatCurrency(cartCtx.totalAmount)}</span>
      </div>
      <button className={classes.button} disabled={props.hasItemCarts ? false : true} onClick={() => setIsOrder(checked => !checked)}>
        Order now!
      </button>
      {createPortal(
        <Modal
          title="Success"
          message="All items has been purchased. Please check your email for confirmation."
          isOrder={isOrder}
          hideModal={() => setIsOrder(false)} 
        />, 
        document.getElementById('overlays')
      )}
    </div>
  );
};

export default CartActions;
