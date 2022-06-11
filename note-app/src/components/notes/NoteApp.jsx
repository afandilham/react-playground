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
        ...prev.initialData,
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
      const results = this.state.initialData.filter(note => {
        return note.title.toLowerCase().startsWith(event.toLowerCase());
      });
      this.setState(() => {
        return {
          initialData: [...results],
        }
      })
    } else {
      this.setState((prev) => {
        return {
          ...prev,
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
            title="Daftar Catatan"
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