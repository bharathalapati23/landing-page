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
    [theme.breakpoints.up("xs")]: {
      justifyContent: "center",
      paddingRight: "0%",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      paddingRight: "10%",
    },
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>CALL US : 95138 69695</h4>
    </div>
  );
}

export default NavBar;
