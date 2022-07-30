import React, { useRef } from "react";
import classes from "./CartItem.module.css";
import Input from "../ui/Input";

const CartItem = (props) => {
  const amountCartRef = useRef();

  return (
    <li className={classes.item}>
      <p>Kevin Meja Gaming - Hitam</p>
      <div className={classes.summary}>
        <div className="font-semibold text-xl">$45</div>
        <div className={classes.input}>
          <button className={classes.button} onClick={props.onDecreaseAmount}>-</button>
          <Input
            ref={amountCartRef}
            input={{
              type: "num",
              placeholder: "amount",
              min: "1",
              max: "200",
              value: "x" + props.amount,
              disabled: true,
            }}
          />
          <button className={classes.button} onClick={props.onIncreaseAmount}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
