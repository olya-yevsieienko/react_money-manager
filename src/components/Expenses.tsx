import React, { useState } from 'react';

import { ExpenseForm } from './Expenses/ExpenseForm';
import { ExpenseItem } from './Expenses/ExpenseItem';
import './Expenses.scss';
import { Expense } from '../type/Expense';

export const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddNewExpense = (item: Expense) => {
    setExpenses((prevState) => [...prevState, item]);
  };

  return (
    <>
      <ExpenseForm onSaveExpenseData={handleAddNewExpense} />

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  );
};
