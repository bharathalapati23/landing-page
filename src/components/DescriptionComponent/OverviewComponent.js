import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'poppins',
        fontSize: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '30px',
    },
    horizontalLine: {
        border: '2px solid darkblue'
    },
    heading: {
        fontSize: '50px',
        backgroundColor: 'black',
        color: 'white'
    },
    descText: {
        paddingTop: '20px'
    }
}));

const OverviewComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <hr className={classes.horizontalLine}></hr>
            <div className={classes.heading}>
                PROJECT OVERVIEW
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <div style={{ flex: '50%' }}>
                    Project Location
                </div>
                <div style={{ flex: '50%' }}>
                    Whitefield, Bangalore
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <div style={{ flex: '50%' }}>
                    Total Land Area
                </div>
                <div style={{ flex: '50%' }}>
                    16.5 Acres
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <div style={{ flex: '50%' }}>
                    No. of Units
                </div>
                <div style={{ flex: '50%' }}>
                    689
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <div style={{ flex: '50%' }}>
                    No. of Floors
                </div>
                <div style={{ flex: '50%' }}>
                    On Request
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <div style={{ flex: '50%' }}>
                    Unit Variants
                </div>
                <div style={{ flex: '50%' }}>
                    Suite, 2 BHK, 3 BHK & 4 BHK
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <div style={{ flex: '50%' }}>
                    Project Status
                </div>
                <div style={{ flex: '50%' }}>
                    Launch
                </div>
            </div>
        </div>
    )
}

export default OverviewComponent
