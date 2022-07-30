import React, { forwardRef } from 'react'
import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
  return (  
    <input className={classes.input} ref={ref} { ...props.input } />
  )
});

export default Input