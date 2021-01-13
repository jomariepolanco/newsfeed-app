import { Button, Card, Paper } from '@material-ui/core';
import React from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
    })
)

interface Props {
    note: {id: number, articleTitle: string, text: string, user: {id: number, name: string}};
    deleteNoteHandler: (id: number) => void;
}

const NoteCard: React.FC<Props> = ({note, deleteNoteHandler}) => {
    
    
    const deleteClickHandler = () => {
        deleteNoteHandler(note.id)
    }

    const classes = useStyles()

    return (
        <Paper variant="outlined" className={classes.paper}>
            <h3>{note.articleTitle}</h3>
            <p>{note.text}</p>
            <h5>- {note.user.name}</h5>
            <Button variant="contained" onClick={deleteClickHandler} style={{color: '#ffffff', backgroundColor: '#9147ff', fontWeight: 'bold'}}>Delete</Button>
        </Paper>
    )
}

export default NoteCard;
