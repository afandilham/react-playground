import React, { useState } from "react";
import AppBudget from "./components/Budget/AppBudget";
import { datas } from "./data/index";

function App() {
  const [budget, setBudget] = useState(datas());

  const totalValue = (total, initValue) => {
    return total + Math.round(initValue);
  };

  const totalIncomes = budget.filter(data => data.expense !== true).map((item) => item.value).reduce(totalValue, 0);

  const totalExpenses = budget.filter(data => data.expense === true).map((item) => item.value).reduce(totalValue, 0);

  const [balance, setBalance] = useState(
    2000000 + totalIncomes - totalExpenses
  );

  const addBalanceHandler = (amount) => {
    setBalance((prevBalance) => {
      return prevBalance + amount;
    });
  };

  const decreaseBalanceHandler = (amount) => {
    setBalance((prevBalance) => {
      return prevBalance - amount;
    });
  };

  const addBudgetHandler = (data) => {
    setBudget((prevBudget) => {
      return [data, ...prevBudget];
    });
  };

  const removeBudgetHandler = (id, expense, value) => {
    const filterData = budget.filter((item) => item.id !== id);

    if (expense) {
      setBudget(() => {
        return filterData;
      });
      addBalanceHandler(value);
    }
    
    if (!expense) {
      setBudget(() => {
        return filterData;
      });
      decreaseBalanceHandler(value);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl my-14">
      <AppBudget
        balance={balance}
        budget={budget}
        totalIncomes={totalIncomes}
        totalExpenses={totalExpenses}
        onAddBudget={addBudgetHandler}
        onAddBalance={addBalanceHandler}
        onDecreaseBalance={decreaseBalanceHandler}
        onRemoveBudget={removeBudgetHandler}
      />
    </div>
  );
}

export default App;
