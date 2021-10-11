import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '763px',
        backgroundImage: `url(https://teja10.kuikr.com//r1/20160216/ak_765_632143999-1455611128_700x700.png)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    heading: {
        fontSize: '50px',
        fontFamily: 'poppins',
        fontWeight: 'bolder',
        paddingTop: '30px'
    },
    subHeading: {
        fontSize: '18px',
        fontFamily: 'poppins',
        fontWeight: 'bolder',
        paddingTop: '20px'
    },
    configurationHeading: {
        fontSize: '18px',
        fontFamily: 'poppins',
        fontWeight: 'bolder',
        paddingTop: '50px'
    }
}));

const BrochureComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                PRESTIGE WATERFORD
            </div>
            <div className={classes.subHeading}>
                PEACEFUL LIVING WITH QUALITY LIFESTYLE
            </div>
            <div className={classes.configurationHeading}>
                Suite, 2 BHK, 3 BHK & 4 BHK LUXURY HOMES IN WHITEFIELD
            </div>
        </div>
    )
}

export default BrochureComponent
