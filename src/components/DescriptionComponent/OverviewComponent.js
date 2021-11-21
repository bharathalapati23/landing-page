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
      width: "100vw",
      marginBottom: "5vh",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginBottom: "5vh",
    },
  },
  dataRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2vh",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90vw",
      fontSize: "14px",
    },
  },
  tData: {
    width: "50%",
  },
}));

const OverviewComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <hr className={classes.horizontalLine}></hr> */}
      <div className={classes.heading}>PROJECT OVERVIEW</div>
      <div className={classes.tableDiv}>
        <div className={classes.table}>
          <div className={classes.dataRow}>
            <div className={classes.tData}>Location</div>
            <div className={classes.tData}>
              Off Hennur Road, North Bangalore
            </div>
          </div>
          <div className={classes.dataRow}>
            <div className={classes.tData}>Land Area</div>
            <div className={classes.tData}>114 Acres (Approx.)</div>
          </div>
          <div className={classes.dataRow}>
            <div className={classes.tData}>No.of Units</div>
            <div className={classes.tData}>106 Villas</div>
          </div>
          <div className={classes.dataRow}>
            <div className={classes.tData}>No.of Blocks</div>
            <div className={classes.tData}>7 Blocks</div>
          </div>
          <div className={classes.dataRow}>
            <div className={classes.tData}>No.of Floors</div>
            <div className={classes.tData}>G + 1/2 Floors</div>
          </div>
          <div className={classes.dataRow}>
            <div className={classes.tData}>Unit Variants</div>
            <div className={classes.tData}>3 BHK & 4 BHK</div>
          </div>
          <div className={classes.dataRow}>
            <div className={classes.tData}>Possession Date Project Status</div>
            <div className={classes.tData}>2022 Onwards...</div>
          </div>
          <div className={classes.dataRow}>
            <div className={classes.tData}>RERA Registration Number</div>
            <div className={classes.tData}>
              PRM/KA/RERA/1251/
              <br />
              446/PR/181210/002211
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
