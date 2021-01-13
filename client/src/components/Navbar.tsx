import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      flex: 1,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#9147ff" }} position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <FiberNewIcon />
          </IconButton>
          <Typography className={classes.logo} variant="h6" color="inherit">
            Newsroom
          </Typography>
          <div>
            <Button href="/" color="inherit">
              News
            </Button>
            <Button href="/login" color="inherit">
              Login
            </Button>
            <Button href="/signup" color="inherit">
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
