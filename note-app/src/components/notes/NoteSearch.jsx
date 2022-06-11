import React from 'react'

const NoteSearch = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari catatan"
      onChange={(event) => onSearch(event.target.value)}
    />
  )
}

export default NoteSearch;
