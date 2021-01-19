import React from "react";
import Badshahi from "../unnamed.jpg";
import { makeStyles, ButtonBase, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Map from "./Map";
//import logo from "../2020-09-03 (2).png";

const images = [
  {
    url: Badshahi,
    width: "100%",
  },
];
const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),

    width: 200,
  },

  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 500,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
      Radius: "0 2rem 0 0",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  form: {
    position: "absolute",
    padding: "5.0rem",
    marginLeft: "5%",
    // backgroundColor: "#90caf9",
    color: "blue",
    borderRadius: "1.0rem",
    height: 430,
    width: 400,
  },
  button: {
    backgroundColor: "#4CAF50" /* Green */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline - block",
    fontSize: "16px",
    borderRadius: "12px",
    marginTop: "13px",
    marginLeft: "140px",
  },
  h1: {
    color: "black",
    // marginTop: "40px",
    //paddingRight: "100px",
    // fontSize: "21",
    fontStyle: "italic",
    textAlign: "center",
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            //focusRipple
            key={image.title}
            className={classes.image}
            style={{
              width: image.width,
              //  border: "dotted",
              borderBottomLeftRadius: "200px",
              borderBottomRightRadius: "200px",
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
                //   borderBottomLeftRadius: "200px",
                borderBottomRightRadius: "200px",
                // borderTopLeftRadius: "200px",
                borderTopRightRadius: "200px",
                marginTop: "60px",
              }}
            />
          </ButtonBase>
        ))}
      </div>
      <Grid
        container
        style={{
          // padding: "40px",
          //  backgroundColor: "#ff9100",
          //   backgroundImage: "linear-gradient(to bottom right, #0288d1, white)",
          // height: "700px",
          fontSize: 30,
          marginTop: "100px",
        }}
      >
        <Grid item xs={12} className={classes.h1}>
          <h1>Get In Touch With Us</h1>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            padding: "50px",
            //  backgroundColor: "#ff9100",
            //ckgroundImage: "linear-gradient(to bottom right, #0288d1, white)",
            height: "500px",
          }}
        >
          <p style={{ fontSize: 60, color: "blue" }}>
            Feel Free To Contact With Us, We Would Love To Help You!
          </p>
        </Grid>
        <hr></hr>

        <Grid
          item
          xs={6}
          style={{
            //  border: "ridge",
            borderColor: "white",
            borderRadius: "3.0rem",
            // backgroundColor: "#29b6f6",
            backgroundImage: "linear-gradient(to bottom right, #29b6f6, white)",

            padding: "4px",
            //  backgroundColor: "#ff9100",
            // backgroundImage: "linear-gradient(to bottom right, #0288d1, white)",
            height: "500px",
            borderTopLeftRadius: "100px",
          }}
        >
          <div className={classes.form}>
            <form id="contact-form" method="POST">
              <h1> Contact Form</h1>
              <TextField
                id="standard-basic"
                label="Enter Name"
                variant="standard"
                backgroundColor="white"
                color="orange"
                fullWidth="true"
                placeholder="Type Your Name Here"
              />
              <TextField
                id="standard-basic"
                label="Enter Email"
                variant="standard"
                backgroundColor="white"
                color="orange"
                fullWidth="true"
                placeholder="xyz@gmail.com"
              />
              <TextField
                id="standard-multiline"
                label="Enter Message"
                variant="standard"
                backgroundColor="white"
                color="orange"
                fullWidth="true"
                placeholder="Type Your Message Here"
                multiline
                rows={4}
              />

              <button type="submit" className={classes.button}>
                Submit
              </button>
            </form>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            // padding: "10px",
            // //  backgroundColor: "#ff9100",
            // // backgroundImage: "linear-gradient(to bottom right, #0288d1, white)",
            //height: "700px",
            marginTop: "200px",
            marginBottom: "50px",
            //border: "dotted",
            //   borderColor: "black",
          }}
          className={classes.h1}
        >
          <h1>Find Us On Google Maps!</h1>
        </Grid>
      </Grid>
      <Map />
    </div>
  );
};

export default ContactUs;
//onSubmit={this.handleSubmit.bind(this)}

/* <img
            src={logo}
            style={{ width: "70%", height: "500px" }}
            alt="cover"
          />{" "} 
          <img
            src={logo}
            style={{ width: "100%", height: "500px" }}
            alt="cover"
          />*/
