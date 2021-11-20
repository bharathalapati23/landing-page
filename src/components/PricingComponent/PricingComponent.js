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
    // backgroundColor: "black",
    // color: "white",
    textDecoration: "underline",
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
      height: "30vh",
      width: "80vw",
      marginTop: "3vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "30vh",
      width: "40vw",
      marginTop: "3vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "40vh",
      width: "40vw",
      marginTop: "3vh",
    },
    boxShadow:
      " rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  button: {
    marginTop: "8vh",
    marginBottom: "3vh",
    backgroundColor: "#e63946",
    color: "white",
    fontSize: "25px",
    borderRadius: "15px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "14px",
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
      width: "100vw",
      height: "40vh",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60vw",
      height: "60vh",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      height: "90vh",
    },
    // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  planIllustrations: {
    marginTop: "3vh",
    marginBottom: "3vh",
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      // flexDirection: "col",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  illImage: {
    margin: "10px",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "80vw",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "50vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "30vw",
    },
  },
  planCol: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  // planCol2: {
  //   marginTop: "10px",
  //   marginBottom: "10px",
  //   [theme.breakpoints.between("xs", "sm")]: {
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  // },
  // illImage2: {
  //   [theme.breakpoints.between("xs", "sm")]: {
  //     width: "83vw",
  //   },
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: "8px",
  //   },
  // },
}));

const PricingComponent = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {/* <hr className={classes.horizontalLine} /> */}
        <div className={classes.heading}>PRICING</div>
        <div className={classes.cards}>
          <div className={classes.priceCardRoot}>
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </div>

        <div className={classes.heading}>Book A FREE Site-Visit</div>
        <a href="#contactForm" style={{ textDecoration: "none" }}>
          <Button variant="contained" className={classes.button}>
            Schedule My Site-Visit
          </Button>
        </a>

        <div className={classes.heading}>MASTER PLAN</div>
        <div className={classes.mPlan}>
          <img
            className={classes.mPlanImage}
            // src="https://images.assets-landingi.com/VznT4k756OPf3wml/master_plan.jpg"
            src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Master-Plan.jpg"
            alt="mastePlanImage"
          />
        </div>
        <div className={classes.heading}>FLOOR PLANS</div>
        <div className={classes.plans}>
          <img
            // src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"
            src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Floor-Plans-1.jpg"
            alt="assetPlan"
            className={classes.planImage}
          />
          <img
            // src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"
            src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Floor-Plans-2.jpg"
            alt="assetPlan"
            className={classes.planImage}
          />
        </div>
        <div className={classes.plans}>
          <img
            // src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"
            src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Floor-Plans-3.jpg"
            alt="assetPlan"
            className={classes.planImage}
          />
          <img
            // src="https://images.assets-landingi.com/aabSDaqctafEAWJ0/floor_plan_1.jpg"
            src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Floor-Plans-4.jpg"
            alt="assetPlan"
            className={classes.planImage}
          />
        </div>
        <div className={classes.heading}>GALLERY</div>
        <div className={classes.planIllustrations}>
          <div className={classes.planCol}>
            <img
              // src="https://images.assets-landingi.com/qhO51eQ5gZAHPvnY/gallery_1.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-1-1.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
            <img
              // src="https://images.assets-landingi.com/prUzIlrJlnS0eWNM/gallery_2.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-2-1.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
            <img
              // src="https://images.assets-landingi.com/prUzIlrJlnS0eWNM/gallery_2.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-3-1.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
          </div>
          <div className={classes.planCol}>
            <img
              // src="https://images.assets-landingi.com/qhO51eQ5gZAHPvnY/gallery_1.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-4.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
            <img
              // src="https://images.assets-landingi.com/prUzIlrJlnS0eWNM/gallery_2.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-5.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
            <img
              // src="https://images.assets-landingi.com/prUzIlrJlnS0eWNM/gallery_2.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-6.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
          </div>
          <div className={classes.planCol}>
            <img
              // src="https://images.assets-landingi.com/qhO51eQ5gZAHPvnY/gallery_1.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-2.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
            <img
              // src="https://images.assets-landingi.com/prUzIlrJlnS0eWNM/gallery_2.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-1.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
            <img
              // src="https://images.assets-landingi.com/prUzIlrJlnS0eWNM/gallery_2.jpg"
              src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Luxury-Villas-Off-Hennur-Road-North-Bangalore-3.jpg"
              alt="planIllustration"
              className={classes.illImage}
            />
          </div>
          {/* <div className={classes.planCol2}>
            <img
              src="https://images.assets-landingi.com/j6i7xrRgSxhVb2Zl/gallery_3.jpg"
              alt="planIllustration"
              className={classes.illImage2}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PricingComponent;
