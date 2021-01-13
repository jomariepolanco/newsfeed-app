import { Button, Card, Paper } from '@material-ui/core';
import { Note } from '@material-ui/icons';
import React from 'react'


interface Props {
    note: {id: number, articleTitle: string, text: string, user: {id: number, name: string}};
}

const NoteCard: React.FC<Props> = ({note}) => {
    
    
    const deleteClickHandler = () => {
        fetch(`/api/notes/${note.id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
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
