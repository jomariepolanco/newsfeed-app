import {
  createStyles,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
  Grid,
  Paper
} from "@material-ui/core";
import React from "react";
import NewsCard from "../components/NewsCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 900,
      height: 750,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
  })
);
interface Props {
  news: any;
}

const NewsContainer: React.FC<Props> = ({ news }) => {
  const renderNewsCards = () => {
    return [...news].map((article, idx) => {
      return (
        <GridListTile key={idx}>
          <NewsCard key={idx} news={article} />
        </GridListTile>
      );
    });
  };

  const classes = useStyles();

  return (
    <Grid container spacing={0}>
    <Grid item md={12}>
        <Paper className={classes.paper}>
        <div className={classes.root}>
            <GridList cellHeight={300} spacing={1} className={classes.gridList}>
            {renderNewsCards()}
            </GridList>
        </div>
    </Paper>
  </Grid>
  </Grid>
  );
};

export default NewsContainer;
