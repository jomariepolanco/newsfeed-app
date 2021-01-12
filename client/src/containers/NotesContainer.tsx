import { Button, Grid } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import CreateNoteForm from '../components/CreateNoteForm';
import NoteCard from '../components/NoteCard'

export default function NotesContainer() {
    const [notes, setNotes] = useState([]);

    const getNotes = () => {
      fetch('/api/notes')
        .then((result) => result.json())
        .then((res) => setNotes(res));
    };

    useEffect(() => {
        getNotes()
    }, [])

    const renderNoteCards = () => {
        return [...notes].map(note => <Grid item xs={4} spacing={2}><NoteCard note={note} /></Grid>)
    }
  
    console.log(notes)
    return (
        <div>
            {renderNoteCards()}
            <CreateNoteForm />
        </div>
    )
}
