import { createStyles, GridList, GridListTile, makeStyles, Theme } from '@material-ui/core';
import React from 'react'
import NewsCard from '../components/NewsCard'
import SearchForm from '../components/SearchForm'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 500,
        height: 450
    },
    titleBar: {
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%'
    },
    icon: {
        color: 'white',
    }
})
)

export default function NewsContainer() {

    const [news, setNews] = React.useState();

    const getNews = () => {
        fetch('/api/all_news')
            .then((result) => result.text())
            .then((response) => setNews(response));
    };
    getNews()

    const renderNewsCards = () => {
        return [...news].map((article, idx) => <GridListTile key={article.title}><NewsCard key={idx} news={article}/></GridListTile>)
    }

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <SearchForm />
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {renderNewsCards()}

            </GridList>
        </div>
    )
}
