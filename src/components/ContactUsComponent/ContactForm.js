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

    alignItems: "center",
    borderRadius: "5px",
    paddingBottom: "10px",
    paddingTop: "10px",
    backgroundColor: "#212529",
    // opacity: "0.",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  textFieldStyles: {
    width: "95%",
    backgroundColor: "#edf2fb",
    borderRadius: "3px",
    margin: "2px",
    padding: "0",
  },
  button: {
    width: "95%",
    marginTop: "5px",
    marginBottom: "2px",
    textDecoration: "none",
    backgroundColor: "#e63946",
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    phone: "",
  });

  const submitForm = () => {
    setFormData({
      message: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <form className={classes.root} onSubmit={submitForm}>
      <TextField
        name="message"
        variant="filled"
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={classes.textFieldStyles}
        required
        multiline
        rows={4}
      />
      <TextField
        name="name"
        variant="filled"
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className={classes.textFieldStyles}
        required
      />
      <TextField
        name="email"
        variant="filled"
        label="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={classes.textFieldStyles}
        required
      />
      <TextField
        name="phone"
        variant="filled"
        label="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className={classes.textFieldStyles}
        required
      />

      <Button
        className={classes.button}
        disabled={!formData.name || !formData.email || !formData.phone}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
