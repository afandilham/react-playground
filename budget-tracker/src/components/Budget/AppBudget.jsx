import React from "react";
import BudgetStats from "./Statistics/BudgetStats";
import NewBudget from "../NewBudget/NewBudget";
import BudgetOverview from "./Overview/BudgetOverview";
import BudgetLists from "./BudgetLists";

export default function AppBudget(props) {
  return (
    <>
      <BudgetOverview balance={props.balance} />
      <BudgetStats
        totalIncomes={props.totalIncomes}
        totalExpenses={props.totalExpenses}
      />
      <NewBudget 
        addBudget={props.onAddBudget}
        addBalance={props.onAddBalance}
        decreaseBalance={props.onDecreaseBalance} />
      <BudgetLists budget={props.budget} removeBudget={props.onRemoveBudget} />
    </>
  );
}
