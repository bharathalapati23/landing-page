import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import EnquiryComponent from '../EnquiryComponent/EnquiryComponent'

const useStyles = makeStyles((theme) => ({
    bgImage: {
        width: '100%',
        height: '663px',
        backgroundImage: `url(https://teja10.kuikr.com//r1/20160216/ak_765_632143999-1455611128_700x700.png)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    root: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
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
        <div className={classes.bgImage}>
            <div className={classes.root}>
                <div>
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
                <div style={{ marginBottom: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <div>
                        <div>
                            Download Your Free
                        </div>
                        <div>
                            PRESTIGE WATERFORD
                        </div>
                        <div>
                            Brochure Now!
                        </div>
                    </div>
                    <EnquiryComponent />
                </div>
            </div>
        </div>
    )
}

export default BrochureComponent
