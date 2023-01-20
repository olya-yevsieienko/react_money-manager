import React from 'react';

import './CustomButton.scss';

type Props = {
  title: string;
  onClick?: () => void;
};

export const CustomButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};
