import React from 'react'
import Card from '../shared/Card'
import ButtonDelete from './events/ButtonDelete'
import ButtonArchive from './events/ButtonArchive'

const NoteItems = ({ id, title, body, createdAt, archived, onDelete, onNoteAction }) => {
  function formatDate(date) {
    const options = {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };

    const dateData = new Date(date);
    const formatResult = new Intl.DateTimeFormat('id', options).format(dateData);
    return formatResult;
  }

  return (
    <article className='note-item'>
      <div className="note-body">
        <span className='note-item__created'>{formatDate(createdAt)}</span>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className="note-action">
        <ButtonArchive id={id} onArchive={onNoteAction} archived={archived} />
        <ButtonDelete id={id} onDelete={onDelete} />
      </div>
    </article>
  )
}

export default NoteItems;
