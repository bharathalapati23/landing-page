import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Collapse from "@mui/material/Collapse";
import ContactForm from "./ContactForm";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    textDecoration: "underline",
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
  about: {
    marginTop: "10vh",
    marginBottom: "10vh",
  },
  aboutHead: {
    widows: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "25px",
    fontWeight: "bolder",
    marginLeft: "3%",
    marginRight: "3%",
    marginTop: "1%",
    backgroundColor: "#e9ecef",
    borderRadius: "15px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "18px",
    },
  },
  aboutDetails: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5vw",
    marginRight: "5vw",
    textAlign: "left",
  },
  h4: {
    marginTop: "0",
    marginBottom: "1vh",
  },
  para: {
    justifyContent: "left",
    textAlign: "left",
    marginTop: "2vh",
    marginLeft: "4vw",
    marginRight: "4vw",
    fontSize: "18px",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
    },
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
  map: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    borderWidth: "5px",
    borderColor: "black",
    borderStyle: "solid",
    marginTop: "2%",
    marginBottom: "4%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "80vw",
      height: "50vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "60vw",
      height: "50vh",
    },
    [theme.breakpoints.up("md")]: {
      width: "50vw",
      height: "80vh",
    },
  },
  googleMap: {
    width: "50vw",
    height: "60vh",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "80vw",
      height: "50vh",
    },
  },
}));

const ContactUsComponent = () => {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.about}>
        <div className={classes.aboutHead} onClick={() => setOpen1(!open1)}>
          <IconButton
            aria-label="expand row"
            size="medium"
            onClick={() => setOpen1(!open1)}
          >
            {open1 ? (
              <KeyboardArrowDownIcon fontSize="large" />
            ) : (
              <KeyboardArrowUpIcon fontSize="large" />
            )}
          </IconButton>
          About Adarsh Tranqville
        </div>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <ul className={classes.aboutDetails}>
            <li className={classes.para}>
              Take a step away from the chaos of the city and unwind in the
              absolute comfort of your state of the art villa. Spread over 14
              acres of lush green spaces, Adarsh Tranqville is a gated community
              that hosts 106 villas.
            </li>
            <li className={classes.para}>
              Located just off the Hennur-Bagalur road in a serene corner of
              North Bangalore, life at Adarsh Tranqville comes with the luxuries
              of a plush resort, the security of a gated community, and the
              intimacy of a small community. Exuding peace, natural beauty and
              impeccable style, replete with world-class amenities, Adarsh
              Tranqville offers you the life you've always wanted.
            </li>
            <li className={classes.para}>
              Each Villa is designed to have a 50 ft. long garden overlooking
              the living & dining areas along with a 46 ft. wide backyard to
              ensure that you are surrounded by abundant greenery, making it the
              perfect location to unwind with your family.
            </li>
          </ul>
        </Collapse>
        <div className={classes.aboutHead} onClick={() => setOpen2(!open2)}>
          <IconButton
            aria-label="expand row"
            size="medium"
            onClick={() => setOpen2(!open2)}
          >
            {open2 ? (
              <KeyboardArrowDownIcon fontSize="large" />
            ) : (
              <KeyboardArrowUpIcon fontSize="large" />
            )}
          </IconButton>
          About Adarsh Developers
        </div>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ul className={classes.aboutDetails}>
            <li className={classes.para}>
              Since 1988, We have been providing innumerable families stability
              and shade; and a place they can call home.
            </li>
            <li className={classes.para}>
              <h4 className={classes.h4}>OUR VISION</h4>
              To be known as the creator of unprecedented superior lifestyles
              60,000 customers will be a part of the Adarsh Family by 2021.
            </li>
            <li className={classes.para}>
              <h4 className={classes.h4}>OUR MISSION</h4>
              Imagine, Innovate, Implement We deliver exceptional quality homes,
              offices and hotels to enhance customer lifestyle and happiness
              that sustains for generations.
            </li>
            <li className={classes.para}>
              <h4 className={classes.h4}>OUR BRAND PILLARS</h4>
              <ul>
                <li>
                  <h4 className={classes.h4}>Trust</h4>
                  Customer satisfaction is the cornerstone of all efforts as the
                  company endeavours to craft homes for lifelong happiness.
                </li>
                <li>
                  <h4 className={classes.h4}>Quality</h4>
                  This is a pivotal philosophy that defines every Adarsh home
                  with quality standards that define industry benchmarks.
                </li>
                <li>
                  <h4 className={classes.h4}>Consistency</h4>
                  Every home built is a product of meticulous planning and fine
                  attention to detail to meet customer expectations.
                </li>
              </ul>
            </li>
          </ul>
        </Collapse>
      </div>

      <div className={classes.map}>
        <div className={classes.heading}>
          <LocationOnIcon className={classes.contactIcon} />
          Location Map
        </div>
        <img
          src="https://www.theadarshtranqville.in/wp-content/uploads/2021/08/Adarsh-Tranqville-Hennur-Road-Location-Map.jpg"
          alt="planIllustration"
          className={classes.mapImage}
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15315.688411310859!2d80.41877000000001!3d16.326924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1637333509616!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          className={classes.googleMap}
          title="map"
        />
      </div>
      <div>
        <div className={classes.heading}>
          <ForumIcon className={classes.contactIcon} />
          Contact Us
        </div>
        <div id="contactForm" className={classes.form}>
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
