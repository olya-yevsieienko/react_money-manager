import React, { useState } from 'react';
import { Expense } from '../../type/Expense';

import { CustomButton } from '../UI/CustomButton';
import './style/ExpenseForm.scss';

type Props = {
  onSaveExpenseData: (item: Expense) => void;
};

export const ExpenseForm: React.FC<Props> = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEntederTitle] = useState('');
  const [enteredAmount, setEntederAmount] = useState('');
  const [enteredDate, setEntederDate] = useState('');

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntederTitle(event.target.value);
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntederAmount(event.target.value);
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntederDate(event.target.value);
  };

  const handleSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newExpense = {
      id: Math.random().toString(),
      title: enteredTitle.trim(),
      amount: enteredAmount.toString(),
      date: new Date(enteredDate),
    };

    if (enteredTitle && enteredAmount && enteredDate) {
      onSaveExpenseData(newExpense);
      setEntederTitle('');
      setEntederAmount('');
      setEntederDate('');
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="expense-form">
        <div className="expense-form__block">
          <label className="expense-form__label">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleChangeTitle}
            className="expense-form__input"
          />
        </div>

        <div className="expense-form__block">
          <label className="expense-form__label">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleChangeAmount}
            className="expense-form__input"
          />
        </div>

        <div className="expense-form__block">
          <label className="expense-form__label">Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={handleChangeDate}
            className="expense-form__input"
          />
        </div>

        <CustomButton title={'Add'} />
      </div>
    </form>
  );
};
