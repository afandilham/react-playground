import React from 'react'

const Button = ({ type, children, color }) => {
  let chooseColor;

  switch(color) {
    case 'primary':
      chooseColor = 'bg-primary text-dark';
      break;
    case 'dark':
      chooseColor = 'bg-dark text-white';
      break;
    case 'red':
      chooseColor = 'bg-red-600 text-white';
      break;
    default:
      chooseColor = 'bg-dark text-white';
  };

  return (
    <button className={`button ${chooseColor}`} type={type}>{children}</button>
  )
}

export default Button;
