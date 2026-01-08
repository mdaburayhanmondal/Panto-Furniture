import React from 'react';
import buttonArray from '../assets/button-icon.png';

const Button = ({ buttonText }) => {
  return (
    <button className="w-fit text-sm text-primary flex items-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in group underline underline-offset-4 hover:decoration-transparent px-2 py-1">
      {buttonText}
      <img
        src={buttonArray}
        alt=""
        className="group-hover:translate-x-1 hover:translate-y-0 transition-all duration-300 ease-in opacity-0 -translate-x-8 group-hover:opacity-100"
      />
    </button>
  );
};

export default Button;
