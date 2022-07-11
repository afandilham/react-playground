import React from "react";
import BudgetItem from "./BudgetItem";

export default function BudgetLists(props) {
  return (
    <ul className="w-full container mx-auto mt-10">
      {props.budget.length !== 0 ? (
        props.budget.map((budget) => (
          <BudgetItem
            key={budget.id}
            id={budget.id}
            title={budget.title}
            date={budget.date}
            expense={budget.expense}
            value={budget.value}
            onRemoveBudget={props.removeBudget}
          />
        ))
      ) : (
        <p className="text-center bg-base-300 shadow-md rounded-sm p-4">There are no datas</p>
      )}
    </ul>
  );
}
