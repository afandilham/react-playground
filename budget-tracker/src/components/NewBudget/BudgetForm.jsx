import React, { useState } from "react";
import Button from "../shared/Button";

export default function BudgetForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString());
  const [type, setType] = useState("expense");

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onAmountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const onTypeChangeHandler = (event) => {
    setType(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (type === "expense") {
      props.addBudget({
        id: +new Date(),
        title: title,
        expense: true,
        value: Number(amount),
        date: date,
      });
      props.decreaseBalance(Number(amount));
    }
    
    if (type === "income") {
      props.addBudget({
        id: +new Date(),
        title: title,
        expense: false,
        value: Number(amount),
        date: date,
      });
      props.addBalance(Number(amount));
    }
    setTitle('');
    setAmount(0);
    setDate(new Date().toISOString());
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="w-full">
        <label className="label" htmlFor="title">
          <span className="label-text">Expense/Income title</span>
        </label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          className="input input-bordered input-primary input-md w-full"
          value={title}
          onChange={onTitleChangeHandler}
        />
        <label className="label" htmlFor="amount">
          <span className="label-text">Amount</span>
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          min="1"
          className="input input-bordered input-primary input-md w-full"
          value={amount}
          onChange={onAmountChangeHandler}
        />
        <label className="label" htmlFor="date">
          <span className="label-text">Date</span>
        </label>
        <input
          type="date"
          id="date"
          placeholder="Date"
          className="input input-bordered input-primary input-md w-full"
          onChange={onDateChangeHandler}
        />
      </div>
      <div className="form-control mt-4" onChange={onTypeChangeHandler}>
        <label className="label cursor-pointer">
          <span className="label-text">Expense</span>
          <input
            type="radio"
            name="type"
            value="expense"
            className="radio checked:bg-red-500"
            defaultChecked
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Income</span>
          <input
            type="radio"
            name="type"
            value="income"
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
      <div className="flex flex-col gap-4 mt-3">
        <button className="btn btn-outline btn-secondary-content" onClick={props.onCancel}>Cancel</button>
        <Button bgColor="primary">Submit</Button>
      </div>
    </form>
  );
}
