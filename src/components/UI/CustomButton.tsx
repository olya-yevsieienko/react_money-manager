import React from 'react';

import './CustomButton.scss';

type Props = {
  title: string;
  onClick?: () => void;
  width: string;
};

export const CustomButton: React.FC<Props> = ({ title, onClick, width }) => {
  return (
    <button className="button" style={{ width: width }} onClick={onClick}>
      {title}
    </button>
  );
};
