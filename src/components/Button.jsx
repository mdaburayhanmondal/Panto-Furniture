import React from 'react';
import buttonArray from '../assets/button-icon.png';

const Button = ({ buttonText }) => {
  return (
    <button className="text-sm text-primary flex items-center gap-x-1 cursor-pointer">
      {buttonText}
      <img src={buttonArray} alt="" />
    </button>
  );
};

export default Button;
