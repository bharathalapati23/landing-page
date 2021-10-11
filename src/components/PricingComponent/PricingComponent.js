import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PriceCard from './PriceCard'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'poppins',
        fontSize: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '30px',

    },
    priceCardRoot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    card: {
        width: '30%'
    },
    heading: {
        fontSize: '40px',
        fontWeight: 'bolder',
        marginTop: '40px'
    },
}));


const PricingComponent = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.priceCardRoot}>
                    <PriceCard />
                    <PriceCard />
                    <PriceCard />
                </div>

                <div className={classes.heading}>
                    Book A FREE Site-Visit to G Corp Residences
                </div>
                <Button variant="contained" disableElevation style={{ marginTop: '30px' }}>
                    Schedule My Site-Visit
                </Button>
                <div className={classes.heading}>
                    G Corp Resdiences Plans
                </div>
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <img src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"></img>
                    <img src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"></img>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <img src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"></img>
                    <img src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"></img>
                </div>
                <div className={classes.heading}>
                    G Corp Resdiences Master Plan
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <img src="https://images.assets-landingi.com/VznT4k756OPf3wml/master_plan.jpg"></img>
                </div>
                <div className={classes.heading}>
                    Prestige Pinewood Images
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    <img src="https://images.assets-landingi.com/qhO51eQ5gZAHPvnY/gallery_1.jpg" style={{ marginRight: '20px' }}></img>
                    <img src="https://images.assets-landingi.com/prUzIlrJlnS0eWNM/gallery_2.jpg" style={{ marginRight: '20px' }}></img>
                    <img src="https://images.assets-landingi.com/j6i7xrRgSxhVb2Zl/gallery_3.jpg"></img>
                </div>
            </div>
        </>
    )
}

export default PricingComponent
