import React, { useState } from 'react';

import { CustomButton } from '../UI/CustomButton';
import './style/ExpenseItem.scss';

type Props = {
  title: string;
  amount: string;
  date: Date;
};

export const ExpenseItem: React.FC<Props> = ({ title, amount, date }) => {
  const [changedTitle, setChangedTitle] = useState(title);
  const [changedAmount, setChangedAmount] = useState(amount);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const handleChangeData = (): void => {
    setChangedTitle(changedTitle);
    setChangedAmount(changedAmount);
    setButtonsVisible(!buttonsVisible);
  };

  const handleButtonsVisible = () => {
    setButtonsVisible(!buttonsVisible);
  };

  const localeDate = date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="expense-item">
      <p className="expense-item__date">{localeDate}</p>

      <div className="expense-item__description">
        <p className="expense-item__title">
          {!buttonsVisible ? `${changedTitle}` : 'Change'}
        </p>
        <p>{!buttonsVisible ? `$${changedAmount}` : 'Change'}</p>
      </div>

      {!buttonsVisible ? (
        <div className="expense-item__changes">
          <CustomButton title="Change" onClick={handleButtonsVisible} />
        </div>
      ) : (
        <div className="expense-item__changes">
          <div className="expense-item__buttons">
            <CustomButton title="Save" onClick={handleChangeData} />
          </div>

          <p className="expense-item__close" onClick={handleButtonsVisible}>
            X
          </p>
        </div>
      )}
    </div>
  );
};
