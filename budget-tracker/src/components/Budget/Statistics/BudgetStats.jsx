import React from "react";
import Card from "../../shared/Card";
import BudgetStatItem from "./BudgetStatItem";

export default function BudgetStat(props) {
  return (
    <Card>
      <BudgetStatItem bgColor="blue" title="Total Income" total={props.totalIncomes} />
      <BudgetStatItem bgColor="red" title="Total Expenses" total={props.totalExpenses} />
    </Card>
  );
}
