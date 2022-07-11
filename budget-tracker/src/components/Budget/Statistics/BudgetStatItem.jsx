import React from "react";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function BudgetStatItem({ bgColor, title, total }) {
  const textColor = () => {
    if (bgColor === "blue") {
      return "text-blue-500";
    }

    if (bgColor === "red") {
      return "text-red-500";
    }
  };

  const IncomeIcon = () => {
    return (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  const ExpenseIcon = () => {
    return (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  const BudgetIcon = () => {
    if (bgColor === "blue") {
      return <IncomeIcon />;
    } else if (bgColor === "red") {
      return <ExpenseIcon />;
    }
  };

  return (
    <div className="stat">
      <div className={`stat-figure ${textColor()}`}>
        <BudgetIcon />
      </div>
      <div className="stat-title">{title}</div>
      <div className={`stat-value text-2xl ${textColor()}`}>Rp{formatCurrency(total)}</div>
      <div className="stat-desc pt-2">From January to December</div>
    </div>
  );
}
