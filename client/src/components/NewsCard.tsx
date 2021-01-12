import { createStyles, GridListTileBar, IconButton, makeStyles } from '@material-ui/core'
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import React from 'react'

const useStyles = makeStyles(() => createStyles({
    titleBar: {
        background: '#9147ff',
    },
    icon: {
        color: 'rgba(255, 255, 255)',
    }
    })
)

interface Props {
    news: any;
}

const NewsCard: React.FC<Props> = ({news}) => {

    const classes = useStyles()
    return (
        <div>
            <a href={news.url} target="_onblank">
                <img src={news.urlToImage} alt={news.title} />
            </a> 
                <GridListTileBar title={news.title} titlePosition="bottom" actionIcon={<IconButton aria-label={`start ${news.title}`} className={classes.icon}><NotificationsNoneSharpIcon/></IconButton>} actionPosition="left" className={classes.titleBar} />

        </div>
    )
}

export default NewsCard;
