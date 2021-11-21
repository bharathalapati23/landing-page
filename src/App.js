import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BrochureComponent from "./components/BrochureComponent/BrochureComponent";
import DescriptionComponent from "./components/DescriptionComponent/DescriptionComponent";
import PricingComponent from "./components/PricingComponent/PricingComponent";
import ContactUsComponent from "./components/ContactUsComponent/ContactUsComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

const useStyles = makeStyles((theme) => ({
  /* Popup style */
  popupBox: {
    zIndex: "4",
    position: "fixed",
    background: "#00000050",
    width: "100%",
    height: "100vh",
    top: "0",
    left: "0",
  },

  box: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "65%",

    [theme.breakpoints.between("xs", "sm")]: {
      width: "80%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "75%",
    },
    margin: "0 auto",
    height: "40vh",
    maxHeight: " 70vh",
    marginTop: "calc(100vh - 85vh - 20px)",
    background: "#14213d",
    borderRadius: "20px",
    padding: "20px",
    border: "1px solid #999",
    overflow: "auto",
  },
  boxTitle: {
    color: "#ffffff",
    fontFamily: "poppins",
    fontStyle: "italic",
    fontSize: "30px",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "20px",
    },
    marginTop: "0",
    marginBottom: "1vh",
  },
  closeIcon: {
    cursor: "pointer",
    position: "fixed",
    right: "calc(15% - 10px)",
    [theme.breakpoints.between("xs", "sm")]: {
      right: "calc(15% - 40px)",
      width: "30px",
      height: " 25px",
      paddingTop: "1px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      right: "calc(15% - 50px)",
      width: "40px",
      height: " 35px",
      paddingTop: "6px",
    },
    top: "calc(100vh - 85vh - 33px)",
    background: "#000000",
    color: "#ffffff",
    width: "40px",
    height: " 35px",
    borderRadius: "50%",
    lineHeight: "20px",
    textAlign: "center",
    border: " 1px solid #999",
    fontSize: "20px",
    paddingTop: "6px",
    // marginLeft: "10vw",
  },
  textFieldStyles: {
    width: "60%",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    margin: "2px",
    marginBottom: "1vh",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "75%",
    },
  },
  button: {
    width: "60%",
    height: "6vh",
    marginTop: "1vh",
    marginBottom: "4vh",
    textDecoration: "none",
    backgroundColor: "#ee6055",
    fontSize: "18px",
    fontWeight: "bolder",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
      fontSize: "15px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "75%",
      fontSize: "16px",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const submitForm = () => {
    setFormData({
      email: "",
      phone: "",
    });
    togglePopup();
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 3000);
  }, []);

  return (
    <div className="App">
      {isOpen && (
        <div className={classes.popupBox}>
          <form className={classes.box} onSubmit={submitForm}>
            <span className={classes.closeIcon} onClick={togglePopup}>
              <CloseIcon />
            </span>
            <h3 className={classes.boxTitle}>
              ' Enquire Now for Special Offers & Exclusive Discounts '
            </h3>
            <TextField
              name="email"
              variant="filled"
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={classes.textFieldStyles}
              required
            />
            <TextField
              name="phone"
              variant="filled"
              label="Phone"
              type="number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={classes.textFieldStyles}
              required
            />
            <Button
              className={classes.button}
              disabled={!formData.email || !formData.phone}
              variant="contained"
              color="primary"
              type="submit"
            >
              AVAIL OFFERS
            </Button>
          </form>
        </div>
      )}
      <NavBar />
      <BrochureComponent />
      <DescriptionComponent />
      <PricingComponent />
      <ContactUsComponent />
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
