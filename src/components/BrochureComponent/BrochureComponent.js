import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import EnquiryComponent from "../EnquiryComponent/EnquiryComponent";

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
  bgImage: {
    width: "100%",
    // backgroundImage: `url(https://teja10.kuikr.com//r1/20160216/ak_765_632143999-1455611128_700x700.png)`,
    // backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(https://constructionweekonlineindia.storage.googleapis.com/public/styles/full_img/public/images/2019/10/10/real-estate.jpg?itok=gw_oQH33.jpg)`,
    backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(https://teja12.kuikr.com/is/a/c/1200x500/gallery_images/original/cf5c5286d9afce2.gif)`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100vh",
    paddingTop: "15vh",
    paddingBottom: "15vh",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },

  root: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "poppins",
    fontWeight: "bolder",
    paddingBottom: "5vh",
    [theme.breakpoints.up("xs")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "50px",
    },
  },
  subHeading: {
    fontFamily: "poppins",
    fontWeight: "bolder",
    paddingBottom: "1vh",
    [theme.breakpoints.up("xs")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
  },
  configurationHeading: {
    fontFamily: "poppins",
    fontWeight: "bolder",
    paddingBottom: "5vh",
    [theme.breakpoints.up("xs")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
  },
  enquiry: {
    display: "flex",
    alignItems: "center",
    fontFamily: "poppins",
    fontSize: "20px",
    justifyContent: "space-around",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  eForm: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "4vh",
    },
  },
}));

const BrochureComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.bgImage}>
      <div className={classes.root}>
        <div>
          <div className={classes.heading}>ADARSH TRANQVILLE</div>
          <div className={classes.subHeading}>
            Luxury Villas by Adarsh Developers Off Hennur Road, North Bangalore
          </div>
          <div className={classes.configurationHeading}>
            Suite, 2 BHK, 3 BHK & 4 BHK LUXURY HOMES
          </div>
        </div>
        <div className={classes.enquiry}>
          <div>
            <div>
              Download Your
              <br />
              <strong>FREE ADARSH TRANQVILLE</strong>
              <br />
              Brochure Now!
            </div>
          </div>
          <div className={classes.eForm}>
            <EnquiryComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureComponent;
