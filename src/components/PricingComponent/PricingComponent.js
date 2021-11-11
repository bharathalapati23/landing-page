import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import PriceCard from "./PriceCard";
import Button from "@material-ui/core/Button";

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
    width: "100%",
  },
  priceCardRoot: {
    display: "flex",
    marginTop: "5vh",
    marginBottom: "5vh",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "80%",
      alignItems: "center",
    },
  },
  cards: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bolder",
    marginTop: "40px",
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "35px",
    },
  },
  plans: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      marginTop: "2vh",
      marginBottom: "2vh",
    },
  },
  planImage: {
    [theme.breakpoints.up("xs")]: {
      height: "50vh",
      width: "80vw",
      marginTop: "3vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "50vh",
      width: "40vw",
      marginTop: "3vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "60vh",
      width: "40vw",
      marginTop: "3vh",
    },
  },
  mPlan: {
    marginTop: "5vh",
    marginBottom: "5vh",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mPlanImage: {
    [theme.breakpoints.up("xs")]: {
      width: "80vw",
      height: "60vh",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60vw",
      height: "60vh",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      height: "80vh",
    },
  },
  planIllustrations: {
    marginTop: "3vh",
    marginBottom: "3vh",
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  illImage: {
    margin: "10px",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "40vw",
    },
  },
  planCol1: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  planCol2: {
    marginTop: "10px",
    marginBottom: "10px",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  illImage2: {
    [theme.breakpoints.between("xs", "sm")]: {
      width: "83vw",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "8px",
    },
  },
}));

const PricingComponent = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.cards}>
          <div className={classes.priceCardRoot}>
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </div>

        <div className={classes.heading}>
          Book A FREE Site-Visit to G Corp Residences
        </div>
        <Button
          variant="contained"
          disableElevation
          style={{ marginTop: "30px" }}
        >
          Schedule My Site-Visit
        </Button>
        <div className={classes.heading}>G Corp Resdiences Plans</div>
        <div className={classes.plans}>
          <img
            src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"
            alt="assetPlan"
            className={classes.planImage}
          />
          <img
            src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"
            alt="assetPlan"
            className={classes.planImage}
          />
        </div>
        <div className={classes.plans}>
          <img
            src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"
            alt="assetPlan"
            className={classes.planImage}
          />
          <img
            src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"
            alt="assetPlan"
            className={classes.planImage}
          />
        </div>
        <div className={classes.heading}>G Corp Resdiences Master Plan</div>
        <div className={classes.mPlan}>
          <img
            className={classes.mPlanImage}
            src="https://images.assets-landingi.com/VznT4k756OPf3wml/master_plan.jpg"
            alt="mastePlanImage"
          />
        </div>
        <div className={classes.heading}>Prestige Pinewood Images</div>
        <div className={classes.planIllustrations}>
          <div className={classes.planCol1}>
            <img
              src="https://images.assets-landingi.com/qhO51eQ5gZAHPvnY/gallery_1.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
            <img
              src="https://images.assets-landingi.com/prUzIlrJlnS0eWNM/gallery_2.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
          </div>
          <div className={classes.planCol2}>
            <img
              src="https://images.assets-landingi.com/j6i7xrRgSxhVb2Zl/gallery_3.jpg"
              alt="planIllustration"
              className={classes.illImage2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingComponent;
