import React from 'react'
import classes from './Widget.module.css';

const Widget = (props) => {
  return (
    <div className={classes.widget}>
      {props.children}
    </div>
  )
}

export default Widget;