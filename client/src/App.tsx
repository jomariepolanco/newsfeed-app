import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import NewsContainer from './containers/NewsContainer';
import NotesContainer from './containers/NotesContainer';
import SearchForm from './containers/SearchForm'
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
  const [news, setNews] = useState("null");
  const [category, setCategory] = useState('general')

  const getNews = (category: string) => {
    fetch(`/api/news/${category}`)
      .then((result) => result.json())
      .then((res) => setNews(res));
  };

    useEffect(() => {
      getNews(category)
    }, [category])

  const classes = useStyles()
  return (
    <div className={classes.root}>
        <Navbar />
        <Grid container spacing={0}>
          <Grid item md={12}>
            <Paper className={classes.paper}>
              <SearchForm setCategory={setCategory}/>
            </Paper>
          </Grid>
          <Grid item md={12}>
            <Paper className={classes.paper}>
              <NewsContainer news={news}/>
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
