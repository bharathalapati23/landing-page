import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '30px',
    },
}));

const FooterComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around', fontSize: '20px', alignItems: 'center' }}>
                <div>
                    <div style={{ fontSize: '26px' }}>
                        G Corp Residences
                        Reviews / Ratings
                    </div>
                    <div style={{ fontSize: '16px' }}>
                        as per Google Reviews*
                    </div>

                </div>
                <div>
                    <Rating name="read-only" value={5} readOnly />
                </div>
            </div>
            <div style={{ fontSize: '12px', marginTop: '25px' }}>
                Disclaimer : any communication/conflict between the CP & CP’s Customer has to be dealt within and does not imply on G Corp to abide by any such offers or promises made by
            </div>
            <div style={{ fontSize: '12px', marginTop: '25px', marginBottom: '60px' }}>
                CPsRERA : PRM/KA/RERA/1251/310/AG/180605/000943, AUTHORIZED MARKETING PARTNER TO GCORP RESIDENCES
            </div>

        </div>
    )
}

export default FooterComponent
