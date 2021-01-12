import { Dialog, DialogTitle, makeStyles } from '@material-ui/core';
import React from 'react'

interface Props {
    open: boolean;
    value: string;
    onClose: (value: string) => void;
}

const CreateNoteForm: React.FC<Props> = ({open, value, onClose}) => {

    const closeHandler = () => {
        onClose(value)
    }

    
    return (
        <Dialog onClose={closeHandler} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle>
                Add a Note
            </DialogTitle>
            
        </Dialog>
    )
}

export default CreateNoteForm;