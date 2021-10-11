import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '30px',
    },
    heading: {
        fontSize: '40px',
        fontWeight: 'bolder',
        marginTop: '40px'
    },
    deleteIcon1: {
        '& svg': {
            fontSize: 50,
            color: 'black'
        }
    },
    dottedLine: {
        border: 'none',
        borderTop: '2px dashed grey',
    },
}));


const ContactUsComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                Contact Us
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around', fontSize: '20px', alignItems: 'center' }}>
                <IconButton className={classes.deleteIcon1} >
                    <PhoneIcon />
                </IconButton>
                <div>
                    +91 95138 69695
                </div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around', fontSize: '20px', alignItems: 'center' }}>
                <IconButton className={classes.deleteIcon1} >
                    <EmailIcon />
                </IconButton>
                <div>
                    info@7thheavenhomes.com
                </div>
            </div>
            <hr className={classes.dottedLine}></hr>
        </div>
    )
}

export default ContactUsComponent
