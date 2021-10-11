import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        // border: 'solid',
        fontFamily: 'poppins',
        fontWeight: 'bolder',
        fontSize: '25px',
        maxWidth: '1200px',
        textAlign: 'right',
        margin: '0 auto',
        height: '78px',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            CALL US : 95138 69695
        </div>
    );
}

export default NavBar
