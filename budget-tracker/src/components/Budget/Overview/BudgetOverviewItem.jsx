import React from "react";

export default function BudgetOverviewItem({ balance }) {
  return (
    <div className="stats bg-base-300 shadow-xl">
      <div className="stat place-items-center">
        <div className="stat-title">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
        </div>
        <div className="stat-value text-primary">Rp{balance}</div>
        <div className="stat-desc pt-2">Balance</div>
      </div>
    </div>
  );
}
