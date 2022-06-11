import React from 'react'

const ButtonArchive = ({ id, onArchive, archived }) => {
  return (
    <button className='button bg-primary text-dark' type="button" onClick={() => onArchive(id)}>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" /><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
      <span>{!archived ? 'archive' : 'unarchive'}</span>
    </button>
  )
}

export default ButtonArchive;
