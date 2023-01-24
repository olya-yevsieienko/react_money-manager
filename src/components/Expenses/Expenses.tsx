import React, { useState } from 'react';

import { ExpenseForm } from './ExpenseForm';
import { ExpenseItem } from './ExpenseItem';
import { Expense } from '../../type/Expense';
import { ExpensesFilter } from './ExpensesFilter';
import { ExpensesChart } from './ExpensesChart';
import './style/Expenses.scss';

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
    <div className="expenses">
      <ExpensesChart expenses={visibleExpenses} />
      <ExpenseForm onSaveExpenseData={handleAddNewExpense} />
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeYear={handleChangeFilter}
        onResetFilter={handleResetFilter}
      />

      {!visibleExpenses.length ? (
        <p className="expenses__no-found">No expenses found</p>
      ) : (
        <ul>
          {visibleExpenses.map((expense) => (
            <li key={expense.id}>
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
