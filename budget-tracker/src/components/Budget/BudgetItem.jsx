import React from 'react'
import { formatCurrency } from '../../utils/formatCurrency';
import BudgetActions from './Events/BudgetActions'

export default function BudgetItem(props) {
  function formatDate(date) {
    const options = {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };

    const dateData = new Date(date);
    const formatResult = new Intl.DateTimeFormat('en-US', options).format(dateData);
    return formatResult;
  }

  const ExpenseIcon = () => (
    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" /></svg>
  );

  const IncomeIcon = () => (
    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
  );

  const BudgetItemIcon = () => {
    if (props.expense) {
      return <ExpenseIcon />
    } else {
      return <IncomeIcon />
    }
  };

  return (
    <li className='bg-base-300 flex justify-between items-center my-3 p-4 rounded-lg shadow-md'>
      <div className='flex items-center gap-x-4'>
        <BudgetItemIcon />
        <div className="budget-info">
          <p className='text-white font-medium text-lg'>{props.title}</p>
          <span className='text-xs'>{formatDate(props.date)}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className='text-xl font-semibold'>{props.expense ? '-' : ''} Rp {formatCurrency(props.value)}</span>
        <BudgetActions onRemoveBudget={props.onRemoveBudget} id={props.id} expense={props.expense} value={props.value} />
      </div>
    </li>
  )
}
