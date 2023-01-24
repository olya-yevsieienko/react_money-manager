import React, { useState } from 'react';

import { ExpenseForm } from './Expenses/ExpenseForm';
import { ExpenseItem } from './Expenses/ExpenseItem';
import { Expense } from '../type/Expense';
import './Expenses.scss';
import { ExpensesFilter } from './Expenses/ExpensesFilter';

export const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredYear, setFilteredYear] = useState('');

  const handleAddNewExpense = (item: Expense) => {
    setExpenses((prevExpenses) => [item, ...prevExpenses]);
  };

  const handleChangeFilter = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const visibleExpenses = [...expenses].filter((expense) => {
    if (!filteredYear) {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  const handleResetFilter = () => {
    setFilteredYear('');
  };

  return (
    <>
      <ExpenseForm onSaveExpenseData={handleAddNewExpense} />
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeYear={handleChangeFilter}
        onResetFilter={handleResetFilter}
      />

      {visibleExpenses.map((expense) => (
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
