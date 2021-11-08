import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: 'white',
        width: '560px'
    },
    textFieldStyles: {
        width: '90%',
        paddingTop: '10px',
        paddingBottom: '10px'
    }
}));

const EnquiryComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField variant="outlined" className={classes.textFieldStyles} />
            <TextField variant="outlined" className={classes.textFieldStyles} />
            <TextField variant="outlined" className={classes.textFieldStyles} />
            <Button>SUBMIT</Button>
        </div>
    )
}

export default EnquiryComponent
