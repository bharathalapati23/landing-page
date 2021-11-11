import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import ContactForm from "./ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
    marginTop: "30px",
    fontFamily: "poppins",
    [theme.breakpoints.between("xs", "sm")]: {
      marginBottom: "15vh",
    },
  },
  heading: {
    fontWeight: "bolder",
    marginTop: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "35px",
    },
    marginBottom: "3vh",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5vh",
    marginBottom: "5vh",
  },
  contactRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "2vh",
  },
  text: {
    fontSize: "20px",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "18px",
    },
  },
  contactIcon: {
    marginRight: "2vw",
    [theme.breakpoints.up("xs")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 35,
    },
    color: "black",
  },
  Icon: {
    fontSize: 30,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 25,
    },
    color: "black",
  },
  dottedLine: {
    border: "none",
    borderTop: "2px dashed grey",
  },
}));

const ContactUsComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.heading}>
          <ForumIcon className={classes.contactIcon} />
          Contact Us
        </div>
        <div className={classes.form}>
          <ContactForm />
        </div>
        <hr className={classes.dottedLine}></hr>
        <div className={classes.contactRow}>
          <IconButton>
            <PhoneIcon className={classes.Icon} />
          </IconButton>
          <div className={classes.text}>+91 95138 69695</div>
        </div>
        <div className={classes.contactRow}>
          <IconButton>
            <EmailIcon className={classes.Icon} />
          </IconButton>
          <div className={classes.text}>info@7thheavenhomes.com</div>
        </div>
        <hr className={classes.dottedLine}></hr>
      </div>
    </div>
  );
};

export default ContactUsComponent;
