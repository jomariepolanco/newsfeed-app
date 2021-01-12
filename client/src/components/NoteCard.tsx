import { Paper } from '@material-ui/core';
import { Note } from '@material-ui/icons';
import React from 'react'


interface Props {
    note: {id: number, articleTitle: string, text: string, user: {id: number, name: string}};
}

const NoteCard: React.FC<Props> = ({note}) => {
    return (
        <Paper elevation={3} variant="outlined">
            <h3>{note.articleTitle}</h3>
            <p>{note.text}</p>
            <h5>- {note.user.name}</h5>
        </Paper>
    )
}

export default NoteCard;
