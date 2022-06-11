import React from 'react'
import Card from '../shared/Card'
import ButtonDelete from './events/ButtonDelete'
import ButtonArchive from './events/ButtonArchive'

const NoteItems = ({ id, title, body, createdAt, archived, onDelete, onNoteAction }) => {
  return (
    <Card>
      <h3 className='note-item__title'>{title}</h3>
      <p className='note-item__body'>{body}</p>
      <span className='note-item__created'>{createdAt}</span>
      <div className="note-action">
        <ButtonArchive id={id} onArchive={onNoteAction} archived={archived} />
        <ButtonDelete id={id} onDelete={onDelete} />
      </div>
    </Card>
  )
}

export default NoteItems;
