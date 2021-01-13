import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import FormInput from "./FormInput";

interface Props {
  user: { id: number; name: string };
  createNoteHandler: (note: {
    text: string;
    userId: number;
    articleTitle: string;
  }) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: "#9147ff",
      color: "#ffffff",
      fontWeight: "bold"
    }
  
  }))

const CreateNoteForm: React.FC<Props> = ({ user, createNoteHandler }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [articleTitle, setArticleTitle] = useState("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "text") setText(event.target.value);
    if (event.target.name === "articleTitle")
      setArticleTitle(event.target.value);
  };

  const openClickHandler = () => {
    setOpen(true);
  };

  const closeClickHandler = () => {
    setOpen(false);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    const note = { text, articleTitle, userId: user.id };
    createNoteHandler(note);
  };

  const classes = useStyles()

  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        onClick={openClickHandler}
      >
        Add Note
      </Button>
      <Dialog
        open={open}
        onClose={closeClickHandler}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={submitHandler}>
          <DialogTitle>Add a Note</DialogTitle>
          <DialogContent>
            <Typography>Article Name</Typography>
            <FormInput
              value={articleTitle}
              type="text"
              onChangeHandler={changeHandler}
              name="articleTitle"
            />
            <Typography>Text</Typography>
            <FormInput
              type="textarea"
              onChangeHandler={changeHandler}
              name="text"
              value={text}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              className={classes.button}
              onClick={closeClickHandler}
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default CreateNoteForm;
