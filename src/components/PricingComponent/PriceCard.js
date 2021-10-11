import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '30%'
    }
}));

const PriceCard = () => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    2 BHK
                    </Typography>
                <Typography variant="h5" component="div">
                    G Corp Residences 2 BHK Price
                    </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    1349 Sq.Ft.
                    </Typography>
                <Typography variant="body2">
                    ₹ 1.91 Cr*
                    <br />
                    {'onwards'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">KNOW MORE</Button>
            </CardActions>
        </Card>
    )
}

export default PriceCard
