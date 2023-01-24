import React from 'react';

import './style/ExpensesFilter.scss';

type Props = {
  selectedYear: string;
  onChangeYear: (selectedYear: string) => void;
  onResetFilter: () => void;
};

export const ExpensesFilter: React.FC<Props> = ({
  selectedYear,
  onChangeYear,
  onResetFilter,
}) => {
  const handleChangeYear = (event: { target: { value: string } }) => {
    onChangeYear(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label className="expense-filter__label"> Filter by year</label>
        <select value={selectedYear} onChange={handleChangeYear}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <p className="expense-filter__close" onClick={onResetFilter}>
          X
        </p>
      </div>
    </div>
  );
};
