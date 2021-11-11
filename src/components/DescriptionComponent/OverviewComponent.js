import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "poppins",
    width: "75vw",
    marginTop: "5vh",
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
      marginBottom: "0vh",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      marginBottom: "0vh",
    },
  },
  horizontalLine: {
    border: "2px solid darkblue",
  },
  heading: {
    backgroundColor: "black",
    color: "white",
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
  tableDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  table: {
    width: "80%",
    marginTop: "3vh",
    marginBottom: "3vh",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      marginBottom: "5vh",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginBottom: "5vh",
    },
  },
}));

const OverviewComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr className={classes.horizontalLine}></hr>
      <div className={classes.heading}>PROJECT OVERVIEW</div>
      <div className={classes.tableDiv}>
        <table className={classes.table}>
          <tr>
            <td>Project Location</td>
            <td>Whitefield, Bangalore</td>
          </tr>
          <tr>
            <td>Total Land Area</td>
            <td>16.5 Acres</td>
          </tr>
          <tr>
            <td>No. of Units</td>
            <td>689</td>
          </tr>
          <tr>
            <td>No. of Floors</td>
            <td>On Request</td>
          </tr>
          <tr>
            <td>Unit Variants</td>
            <td>Suite, 2 BHK, 3 BHK & 4 BHK</td>
          </tr>
          <tr>
            <td>Project Status</td>
            <td>Launch</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default OverviewComponent;
