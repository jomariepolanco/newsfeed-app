import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core'
import FiberNewIcon from '@material-ui/icons/FiberNew';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        }
    })
)

export default function Navbar() {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FiberNewIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Newsroom
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
