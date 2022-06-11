import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='container mx-auto bg-white max-w-md shadow-md rounded-sm p-3'>
      {children}
    </div>
  )
}

export default Card;
