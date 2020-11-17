import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(3),
        // '& > *': {
        //     width: "85%",
        //     height: theme.spacing(12),
        //     marginTop: theme.spacing(5)
        // },
    },
    paper: {
        width: "85%",
        height: theme.spacing(12),
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 10,
        background: '#2BA77A',
        color: '#ffffff'
    },
    title: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: 20,
        '& span': {
            fontWeight: 300,
            fontSize: 10
        }
    },
    otherInfo: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    user: {
        display: 'flex',
        alignItems: 'center'
    }
}))

export default function Device() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper elevation={10} className={classes.paper}>
                <div className={classes.title}>
                    <div>
                        <span>No. </span>36475820237489234
                    </div>
                    待处理
                </div>
                <div className={classes.otherInfo}>
                    <div className={classes.user}>
                        <PersonOutlineIcon />10001
                    </div>
                    2020-11-09 11:00:00
                </div>
            </Paper>
            <Paper elevation={10} className={classes.paper}>
                <div className={classes.title}>
                    <div>
                        <span>No. </span>36475820237489234
                    </div>
                    待处理
                </div>
                <div className={classes.otherInfo}>
                    <div className={classes.user}>
                        <PersonOutlineIcon />10001
                    </div>
                    2020-11-09 11:00:00
                </div>
            </Paper>
            <Paper elevation={10} className={classes.paper}>
                <div className={classes.title}>
                    <div>
                        <span>No. </span>36475820237489234
                    </div>
                    待处理
                </div>
                <div className={classes.otherInfo}>
                    <div className={classes.user}>
                        <PersonOutlineIcon />10001
                    </div>
                    2020-11-09 11:00:00
                </div>
            </Paper><Paper elevation={10} className={classes.paper}>
                <div className={classes.title}>
                    <div>
                        <span>No. </span>36475820237489234
                    </div>
                    待处理
                </div>
                <div className={classes.otherInfo}>
                    <div className={classes.user}>
                        <PersonOutlineIcon />10001
                    </div>
                    2020-11-09 11:00:00
                </div>
            </Paper><Paper elevation={10} className={classes.paper}>
                <div className={classes.title}>
                    <div>
                        <span>No. </span>36475820237489234
                    </div>
                    待处理
                </div>
                <div className={classes.otherInfo}>
                    <div className={classes.user}>
                        <PersonOutlineIcon />10001
                    </div>
                    2020-11-09 11:00:00
                </div>
            </Paper>
            <Paper elevation={10} className={classes.paper}>
                <div className={classes.title}>
                    <div>
                        <span>No. </span>36475820237489234
                    </div>
                    待处理
                </div>
                <div className={classes.otherInfo}>
                    <div className={classes.user}>
                        <PersonOutlineIcon />10001
                    </div>
                    2020-11-09 11:00:00
                </div>
            </Paper>
        </div>
    )
}