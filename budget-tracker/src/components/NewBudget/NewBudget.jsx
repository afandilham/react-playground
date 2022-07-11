import React, { useState } from "react";
import BudgetForm from "./BudgetForm";

export default function NewBudget(props) {
  const [ editing, setEditing ] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  };

  const cancelEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="w-full card-body bg-base-300 rounded-lg shadow-xl">
      {!editing && (<button className="btn btn-primary btn-md" onClick={startEditingHandler}>Add New Budget</button>)}
      {editing && (
        <BudgetForm
          addBudget={props.addBudget}
          addBalance={props.addBalance}
          decreaseBalance={props.decreaseBalance}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
}
