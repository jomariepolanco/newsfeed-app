import { Button, Grid } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import CreateNoteForm from '../components/CreateNoteForm';
import NoteCard from '../components/NoteCard'

interface Props {
    user: {id: number, name: string};
}

const NotesContainer: React.FC<Props> = ({user}) => {
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
  
    const createNoteHandler = (note: {text: string, userId: number, articleTitle: string}) => {
        if (user.id !== 0) {
            fetch('/api/notes', {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(note)
            })
            .then(r => r.json())
            .then(data => getNotes())
        } else {
            alert('Log in to write a note!')
        }
    }

    return (
        <div>
            {renderNoteCards()}
            <CreateNoteForm createNoteHandler={createNoteHandler} user={user} />
        </div>
    )
}

export default NotesContainer;