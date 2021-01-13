import {
  createStyles,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
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
    <div className={classes.root}>
      <GridList cellHeight={300} spacing={1} className={classes.gridList}>
        {renderNewsCards()}
      </GridList>
    </div>
  );
};

export default NewsContainer;
