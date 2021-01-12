import { createStyles, GridList, GridListTile, makeStyles, Theme } from '@material-ui/core';
import React, { Component, useEffect } from 'react'
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
})
)

export default function NewsContainer() {

    const [news, setNews] = React.useState<string[]>([]);

    const getNews = () => {
        fetch('/api/all_news')
            .then((result) => result.json())
            .then((response) => setNews(response));
    };

    useEffect(() => {
        getNews()
    }, [])

    const renderNewsCards = () => {
        return [...news].map((article, idx) => {
            return(
                <GridListTile key={idx}>
                    <NewsCard key={idx} news={article}/>
                </GridListTile>
            )
    })
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
