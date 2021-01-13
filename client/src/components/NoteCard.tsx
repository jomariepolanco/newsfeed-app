import { Button, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    button: {
      color: "#ffffff",
      backgroundColor: "#9147ff",
      fontWeight: "bold"
    }
  })
);

interface Props {
  note: {
    id: number;
    articleTitle: string;
    text: string;
    user: { id: number; name: string };
  };
  deleteNoteHandler: (id: number) => void;
  user: { id: number; name: string };
}

const NoteCard: React.FC<Props> = ({ note, deleteNoteHandler, user }) => {
  const deleteClickHandler = () => {
    deleteNoteHandler(note.id);
  };

  const renderDeleteButton = () => {
    if (note.user.id === user.id) {
      return (
        <Button
          variant="contained"
          onClick={deleteClickHandler}
          className={classes.button}
        >
          Delete
        </Button>
      );
    } else {
      return null;
    }
  };

  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
      <h3>{note.articleTitle}</h3>
      <p>{note.text}</p>
      <h5>- {note.user.name}</h5>
      {renderDeleteButton()}
    </Paper>
  );
};

export default NoteCard;
