import React, { useRef } from "react";
import Input from "../ui/Input";
import classes from "./FurnitureForm.module.css";

const FurnitureForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmountInput = amountInputRef.current.value;
    const enteredAmount = +enteredAmountInput;

    props.addCart(enteredAmount);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.input}>
        <label htmlFor="amountFurniture">Amount</label>
        <Input
          ref={amountInputRef}
          input={{
            type: "number",
            placeholder: "amount",
            min: "1",
            max: "100",
            defaultValue: "1"
          }}
        />
      </div>
      <button className={classes.button}>
        Add +
      </button>
    </form>
  );
};

export default FurnitureForm;
