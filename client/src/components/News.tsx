import { AppBar, Button, createStyles, Dialog, Fab, IconButton, makeStyles, Slide, Theme, Toolbar } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import React, {useState} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        position: 'relative'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    }
}))


const transition = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<any>){
    return <Slide direction='up' ref={ref} {...props} />
})

interface Props {
    news: any;
}

const News: React.FC<Props> = ({news}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const openClickHandler = () => {
        setOpen(true)
    }

    const closeClickHandler = () => {
        setOpen(false)
    }

    return (
        <div>
            <img style={{ maxWidth: "100%" }} src={news.urlToImage} alt={news.title} onClick={openClickHandler}/> 
                  
            <Dialog fullScreen open={open} onClose={closeClickHandler} TransitionComponent={transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={closeClickHandler}>
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {/* News Information Here */}
            </Dialog>
        </div>
    )
}

export default News;
// TransitionComponent={transition}