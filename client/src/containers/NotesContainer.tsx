import { Button } from '@material-ui/core';
import React from 'react'
import NoteCard from '../components/NoteCard'

export default function NotesContainer() {
    const [notes, setNotes] = React.useState([]);

    const getNotes = () => {
      fetch('/api/notes')
        .then((result) => result.json())
        .then((res) => setNotes(res));
    };

    const notesClickHandler = () => {
        getNotes()
    }

    const renderNoteCards = () => {
        [...notes].map(note => <NoteCard note={note} />)
    }

    const toggleModal = () => {
        console.log('toggle')
    }
  
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={notesClickHandler}>See Notes</Button>
            <Button variant="outlined" color="primary" onClick={toggleModal}>Add Note</Button>
            {renderNoteCards}
        </div>
    )
}
