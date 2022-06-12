import React from 'react'
import AppNavbar from '../layout/AppNavbar'
import NoteForm from './NoteForm'
import NoteLists from './NoteLists'
import NoteSearch from './NoteSearch'
import { getData } from '../../data/index'


export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialData: getData(),
      searchData: getData(),
    };
  
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);

    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prev) => {
      let noteData = [
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        }
      ];
      return {
        initialData: noteData,
        searchData: noteData,
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notesData = this.state.initialData.filter(note => note.id !== id);
    this.setState(() => { 
      return {
        initialData: notesData,
        searchData: notesData,
      }
    });
  }

  onArchiveNoteHandler(id) {
    this.state.initialData.map(note => {
      if (note.id === id) {
        note.archived = !note.archived;
        this.setState((prev) => {
          return {
            initialData: [...prev.initialData],
          }
        });
      }
    });
  }

  onSearchNoteHandler(event) {
    if (event !== '') {
      this.setState((prev) => {
        return {
          ...prev,
          initialData: prev.searchData.filter(note => {
            return note.title.toLowerCase().startsWith(event.toLowerCase());
          }),
        }
      })
    } else {
      this.setState(() => {
        return {
          initialData: this.state.searchData
        }
      });
    }
  }

  render() {
    return (
      <>
        <AppNavbar name="Note App" />
        <NoteForm addNote={this.onAddNoteHandler} />
        <NoteSearch onSearch={this.onSearchNoteHandler} />
        <main>
          <NoteLists
            title="Catatan Aktif"
            notes={this.state.initialData.filter(data => !data.archived)} 
            onDelete={this.onDeleteNoteHandler}
            onNoteAction={this.onArchiveNoteHandler}
          />
          <NoteLists
            title="Arsip Catatan"
            notes={this.state.initialData.filter(data => data.archived)} 
            onDelete={this.onDeleteNoteHandler}
            onNoteAction={this.onArchiveNoteHandler}
          />
        </main>
      </>
    )
  }
}