import React from 'react';
import Navbar from './components/Navbar';
import NewsContainer from './containers/NewsContainer';
import NotesContainer from './containers/NotesContainer';
import 'fontsource-roboto';
import { createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
)

function App() {
  const [data, setData] = React.useState("null");

  const getData = () => {
    fetch('/api/users')
      .then((result) => result.text())
      .then((res) => setData(res));
  };

  const classes = useStyles()
  return (
    <div className={classes.root}>
        <Navbar />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <NewsContainer />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <NotesContainer />
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
