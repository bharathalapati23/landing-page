import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "2vh",
    marginBottom: "2vh",
    borderRadius: "7px",
    [theme.breakpoints.up("xs")]: {
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.up("md")]: {
      width: "25%",
    },
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  cardTitle: {
    fontSize: "20px",
    fontFamily: "poppins",
    fontWeight: "bolder",
    backgroundColor: "#e5383b",
    color: "white",
    width: "100%",
    borderRadius: "10px 10px 0 0",
    height: "8vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5vh",
    letterSpacing: "2px",
  },
}));

const PriceCard = () => {
  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      className={classes.card}
      style={{ borderRadius: "10px" }}
    >
      <CardContent
        style={{
          padding: "0",
          backgroundColor: "#495057",
          color: "white",
        }}
      >
        <Typography
          className={classes.cardTitle}
          color="text.secondary"
          gutterBottom
        >
          4 BHK
        </Typography>
        <Typography
          style={{
            fontSize: "23px",
            fontWeight: "bolder",
            fontStyle: "italic",
            letterSpacing: "1px",
            margin: "3vh",
          }}
        >
          ₹ 4.91 Cr*
          <br />
        </Typography>
        <Typography variant="h6" component="div">
          Adarsh Tranqville
          <br />4 BHK Price
        </Typography>
        <p />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <li>Built-Up Area: 4820 Sq.Ft</li>
          <li>Land Area: 3445 Sq.Ft</li>
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#495057",
        }}
      >
        <Button
          // size="small"
          style={{
            backgroundColor: "#eb5e28",
            color: "white",
            marginTop: "5vh",
            width: "60%",
            fontWeight: "bolder",
            letterSpacing: "2px",
          }}
        >
          KNOW MORE
        </Button>
      </CardActions>
    </Card>
  );
};

export default PriceCard;
