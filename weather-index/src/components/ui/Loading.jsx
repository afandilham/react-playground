import React from 'react'
import classes from './Loading.module.css'

const Loading = () => {
  return (
    <>
      <div className={classes.overlay}></div>
      <div className={classes.absolute}>
        <div className={classes.Loading}></div>
      </div>
    </>
  )
}

export default Loading;