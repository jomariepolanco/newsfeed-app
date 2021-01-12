import { createStyles, GridListTileBar, IconButton, makeStyles } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import React from 'react'

const useStyles = makeStyles(() => createStyles({
    titleBar: {
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%'
    },
    icon: {
        color: 'white',
    }
    })
)

interface Props {
    news: any;
}

const NewsCard: React.FC<Props> = ({news}) => {

    const toggleModal = () => {
        console.log('toggle')
    }

    const classes = useStyles()
    return (
        <div>
            <a href={news.url} target="_onblank">
                <img src={news.urlToImage} alt={news.title} />
            </a> 
                <GridListTileBar title={news.title} titlePosition="top" actionIcon={<IconButton aria-label={`start ${news.title}`} className={classes.icon}><StarBorderIcon/></IconButton>} actionPosition="left" className={classes.titleBar} />

        </div>
    )
}

export default NewsCard;
