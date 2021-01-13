import {
  AppBar,
  Button,
  createStyles,
  Dialog,
  GridListTileBar,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleBar: {
      background: "#9147ff",
    },
    icon: {
      color: "rgba(255, 255, 255)",
    },
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

interface Props {
  news: any;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  const [open, setOpen] = useState(false);

  const openClickHandler = () => {
    setOpen(true);
  };

  const closeClickHandler = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <img
        style={{ maxWidth: "100%", cursor: "context-menu" }}
        src={news.urlToImage}
        alt={news.title}
        onClick={openClickHandler}
      />
      <Button onClick={openClickHandler}>View Article</Button>
      <Dialog fullScreen open={open} onClose={closeClickHandler}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeClickHandler}
            >
              <CloseIcon />
            </IconButton>
            <Typography>{news.title}</Typography>
          </Toolbar>
        </AppBar>
        <img
          style={{ maxWidth: "100%" }}
          src={news.urlToImage}
          alt={news.title}
        />
        <h1>{news.title}</h1>
        <h3>By: {news.author}</h3>
        <p>{news.content}</p>
        <a href={news.url} target="_blank" rel="noreferrer">
          Read More...
        </a>
      </Dialog>
      <GridListTileBar
        title={news.title}
        titlePosition="top"
        actionPosition="left"
        className={classes.titleBar}
      />
    </div>
  );
};

export default NewsCard;
