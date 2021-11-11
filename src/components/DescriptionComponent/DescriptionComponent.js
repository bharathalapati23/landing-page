import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import OverviewComponent from "./OverviewComponent";

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
  root: {
    fontFamily: "poppins",
    width: "75vw",
    margin: "0 auto",
    marginTop: "15px",
    // paddingBottom: "5vh",
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
  },
  horizontalLine: {
    border: "2px solid darkblue",
  },
  heading: {
    backgroundColor: "black",
    color: "white",
    marginBottom: "3vh",
    [theme.breakpoints.up("xs")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "50px",
    },
  },
  descText: {
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
  },
}));

const DescriptionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr className={classes.horizontalLine} />
      <div className={classes.heading}>PRESTIGE WATERFORD</div>
      <div className={classes.descText}>
        A new standard of living is taking shape in Whitefield and this is
        youropportunity to be a part of it.
      </div>
      <div className={classes.descText}>
        A delectable community of apartment homes in a wide range of
        roomconfigurations to suit every need.
      </div>
      <div className={classes.descText}>
        Vaastu compliant and designed to emphasise privacy and lavish use
        ofspace.
      </div>
      <div className={classes.descText}>
        Step outside the home and you are greeted by a panorama of terraces,
        stepwalls, hidden courtyards, reflective ponds, seating areas, a maze
        garden, amounded landscape garden, and formal courtyards. All combining
        to afforda magnificent view that can be enjoyed undisturbed from every
        apartment.
      </div>
      <div className={classes.descText}>
        When you want to indulge your leisure the clubhouse answers well, with
        itsmyriad luxury recreational amenities. And for the practical
        necessities of life,Prestige Waterford is situated in proximity to major
        retail hubs, malls, workspotsand educational institutions. It is also
        well connected to other parts of the citythough arterial roads.
      </div>
      <div className={classes.descText}>
        Go ahead.Turn the page and raise your sights to a new standard of
        living.
      </div>
      <OverviewComponent />
      <hr className={classes.horizontalLine}></hr>
    </div>
  );
};

export default DescriptionComponent;
