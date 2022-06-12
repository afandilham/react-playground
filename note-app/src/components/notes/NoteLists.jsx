import React from 'react'
import NoteItems from './NoteItems';

const NoteLists = ({ title, notes, onDelete, onNoteAction }) => {
  return (
    <>
      <h2 className='uppercase my-4 font-semibold text-lg text-dark border-2 border-b-gray-500 border-dotted'>{title}</h2>
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
            <div className='w-full p-3 bg-dark text-white rounded-sm'>Tidak ada catatan</div>
          )
        }
      </div>
    </>
  )
}

export default NoteLists;
