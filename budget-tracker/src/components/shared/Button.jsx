import React, { Children } from 'react'

export default function Button(props) {
  const buttonClassName = () => {
    if (props.bgColor === 'secondary') {
      return 'btn-secondary-content';
    } 
    
    if (props.bgColor === 'primary')  {
      return 'btn-primary';
    }
  };

  return (
    <button type='submit' className={`w-full btn btn-outline ${buttonClassName()} `}>{props.children}</button>
  )
}
