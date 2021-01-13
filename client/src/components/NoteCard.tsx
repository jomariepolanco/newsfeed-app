import { Button, Card } from '@material-ui/core';
import React from 'react'


interface Props {
    note: {id: number, articleTitle: string, text: string, user: {id: number, name: string}};
    deleteNoteHandler: (id: number) => void;
}

const NoteCard: React.FC<Props> = ({note, deleteNoteHandler}) => {
    
    
    const deleteClickHandler = () => {
        deleteNoteHandler(note.id)
    }

    return (
        <Card raised variant="outlined">
            <h3>{note.articleTitle}</h3>
            <p>{note.text}</p>
            <h5>- {note.user.name}</h5>
            <Button onClick={deleteClickHandler} style={{color: '#9147ff'}}>Delete</Button>
        </Card>
    )
}

export default NoteCard;
