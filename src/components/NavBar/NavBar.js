import React, { useEffect } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    fontFamily: "poppins",
    fontWeight: "bolder",
    fontSize: "20px",
    Width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
    },
  },
  navImage: {
    height: "10vh",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Logo-1.png"
        alt="planIllustration"
        className={classes.navImage}
      />
      <h4>CALL US : 95138 69695</h4>
    </div>
  );
}

export default NavBar;
