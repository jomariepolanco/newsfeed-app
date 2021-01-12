import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import React, {ChangeEvent, useState} from 'react'
import FormInput from './FormInput';

const CreateNoteForm = () => {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const [articleTitle, setArticleTitle] = useState('')

    const changeHandler = (value: string, name: string) => {
        if (name === "text") setText(value)
        if (name === "articleTitle") setArticleTitle(value)
    }

    const openClickHandler = () => {
        setOpen(true)
    }

    const closeClickHandler = () => {
        setOpen(false)
    }

    const submitHandler = (event: any) => {
        event.preventDefault()
        const note = {text, articleTitle, userId: 25}
        fetch('/api/notes', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(note)
        })
        .then(r => r.json())
        .then(data => console.log('success'
        , data))
    }

    return (
        <>
        <Button variant="outlined" color="primary" onClick={openClickHandler}>Add Note</Button>
        <Dialog open={open} onClose={closeClickHandler} aria-labelledby="form-dialog-title">
            <form onSubmit={submitHandler}>
            <DialogTitle>Add a Note</DialogTitle>
                <DialogContent>
                    <Typography>Article Name</Typography>
                    <FormInput type="text" onChangeHandler={changeHandler} name="articleTitle" />
                    <Typography>Text</Typography>
                    <FormInput type="text" onChangeHandler={changeHandler} name="text" />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="primary" variant="outlined" onClick={closeClickHandler}>Submit</Button>
                </DialogActions>
            </form>
        </Dialog>

        </>
    )
}

export default CreateNoteForm;