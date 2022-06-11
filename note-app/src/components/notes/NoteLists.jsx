import React from 'react'
import NoteItems from './NoteItems';

const NoteLists = ({ title, notes, onDelete, onNoteAction }) => {
  return (
    <>
      <h2 className='uppercase'>{title}</h2>
      <div className='note-lists'>
        {notes.length > 0 ? (
            notes.map(note => (
              <NoteItems 
                key={note.id}
                id={note.id}
                {...note}
                createdAt={note.createdAt}
                onDelete={onDelete}
                onNoteAction={onNoteAction}
              />
            ))
          ) : (
            <div>Tidak ada catatan</div>
          )
        }
      </div>
    </>
  )
}

export default NoteLists;
