import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        '& > *': {
            width: "80%",
            height: theme.spacing(16),
            marginTop: theme.spacing(10)
        }
    },
    paper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        background: '#3f51b5',
        color: "#ffffff"
    }
}))

export default function BusinessGroup() {

    const classes = useStyles()

    const history = useHistory()
    const handleClick = () => {
        history.push('/businessGroup/device')
    }

    return (
        <div className={classes.root}> 
            <Paper elevation={10} className={classes.paper} onClick={() => handleClick('device')}>
                充电桩业务
            </Paper>
        </div>
    )
} 