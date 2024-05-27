import React from 'react';

import './Button.scss';

interface IButton {
  className?: string;
  children: string;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({className, children, onClick }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
    >
      <span className='button__text'>{children}</span>
    </button>
  );
};

export default Button;
