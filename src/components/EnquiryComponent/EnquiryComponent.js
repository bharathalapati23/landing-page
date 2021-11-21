import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
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
  root: {
    [theme.breakpoints.up("xs")]: {
      width: "70vw",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "30vw",
    },
    borderRadius: "5px",
    paddingBottom: "10px",
    paddingTop: "10px",
    backgroundColor: "#46494c",
    opacity: "0.",
  },
  textFieldStyles: {
    width: "95%",
    backgroundColor: "#e5e5e5",
    borderRadius: "3px",
    margin: "2px",
    padding: "0",
  },
  button: {
    width: "95%",
    marginTop: "5px",
    marginBottom: "2px",
    textDecoration: "none",
  },
}));

const EnquiryComponent = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const submitForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className={classes.root}>
      <TextField
        name="name"
        variant="filled"
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={classes.textFieldStyles}
        required
      />
      <TextField
        name="email"
        variant="filled"
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={classes.textFieldStyles}
        required
      />
      <TextField
        name="phone"
        variant="filled"
        label="Phone"
        type="number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className={classes.textFieldStyles}
        required
      />
      <a
        href="./Elite E-Brochure.pdf"
        onClick={(e) =>
          (!formData.name || !formData.email || !formData.phone) &&
          e.preventDefault()
        }
        download
        style={{ textDecoration: "none" }}
      >
        <Button
          className={classes.button}
          disabled={!formData.name || !formData.email || !formData.phone}
          variant="contained"
          color="primary"
          onClick={submitForm}
        >
          Download Brochure{" >>>"}
        </Button>
      </a>
    </div>
  );
};

export default EnquiryComponent;
