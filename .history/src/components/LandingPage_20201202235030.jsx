import React from "react";
import SearchBar from "./SearchBar";
//import logo from "../Stars and Mountain Silhouette Wide Presentation.jpg";
import image from "../jacek-dylag-SPpsFbCaN2A-unsplash.jpg";
import Badshahi from "../f480089fafa42cc53b36765ea425599d.jpg";
import northern from "../maxresdefault-1-2.jpg";
import Kashmir from "../48d412c78e361f9ecbc5f518bcd7d30d.jpg";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import video from "../Lushgold Apparel.mp4";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

const Bounce = styled.div`
  animation: 5s ${keyframes`${bounce}`};
`;
const images = [
  {
    url: northern,
    title: "Naran & Kaghan",
    width: "30%",
  },
  {
    url: Badshahi,
    title: "Badshahi Mosque",
    width: "40%",
  },
  {
    url: Kashmir,
    title: "Azad Kashmir",
    width: "30%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    paddingLeft: "70px",
    padding: "20px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#33abb8",
    fontSize: "30",
  },

  image: {
    position: "relative",
    height: 500,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
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
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },

  viewMore: {
    borderRadius: "20px",
    //marginLeft: "8.0rem",
    backgroundColor: "#33abb8",
    color: "white",
    marginTop: "2.0rem",
    marginBottom: "2.0rem",
    top: "50%",
    left: "43%",
    padding: "13px",
    width: "200px",
  },
  bigCircle: {
    height: "160px",
    width: "160px",
    borderRadius: "80px",
    //  backgroundColor: "blue",
    //  position: "relative",
    marginLeft: "70px",
    backgroundColor: "#33abb8",
    position: "absolute",
    right: "0",
  },
  smallCircle: {
    height: "100px",
    width: "100px",
    borderRadius: "50px",
    //  backgroundColor: "blue",
    // position: "relative",
    marginLeft: "50px",
    backgroundColor: "#33abb8",
    position: "absolute",
    right: "7",
  },
  guide: {
    // backgroundColor: "#D3D3D3",
    borderRadius: "2rem",
    marginTop: "8.0rem",
    marginBottom: "2.0rem",
  },
  tour: {
    color: "white",
    fontSize: "40",
    fontFamily: "Roboto",
    position: "absolute",
    left: "40%",
  },
  line: {
    color: "white",
    fontSize: "40",
    fontFamily: "Roboto",
    position: "absolute",
    left: "30%",
    marginTop: "90px",
  },
  testimonials: {
    backgroundColor: "white",
    border: "ridge",
    borderBottom: "solid",
    borderColor: "white",
    borderBottomColor: "#339ba5",
    borderRadius: "10px",
    //marginRight: "70px",
    marginLeft: "70px",
    marginBottom: "50px",
  },
  triggerButton: {
    borderRadius: "20px",
    marginLeft: "5.0rem",
    backgroundColor: "#33abb8",
    color: "white",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div>
      <video
        src={video}
        width="100%"
        height="639px"
        // controls="controls"
        autoplay="true"
        loop
      />
      {/* <img src={logo} style={{ width: "100%", height: "600px" }} alt="cover" /> */}
      <SearchBar />
      <span>
        <Bounce>
          <h1
            style={{
              textAlign: "center",
              color: "white",
              backgroundColor: "#339ba5",
            }}
          >
            {" "}
            Popular Destinations Of Pakistan
          </h1>
        </Bounce>
        <hr></hr>
      </span>
      <div>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
      <Button
        variant="contained"
        //color="primary"
        className={classes.viewMore}
      >
        View More
      </Button>
      <hr></hr>
      <Grid container className={classes.guide}>
        <Grid item xs={5}>
          <span>
            <h1 style={{ paddingLeft: "30px" }}>Our Guide Will Help You!</h1>
            <p
              style={{
                fontSize: "2.0rem",
                paddingLeft: "5.0rem",
                paddingRight: "30px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              aliquam! Ad, nisi ab. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laborum sapiente cum pariatur possimus quas, qui
              reprehenderit ut laboriosam, ea nesciunt magni animi, in corrupti
              aliquid deserunt aliquam! Ad, nisi ab. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laborum sapiente dipisicing elit.
              Laborum sapiente cum pariatur possimus quas, qui reprehenderit ut
              laboriosam, ea nesciunt magni animi, in corrupti aliquid deserunt
              aliquam! Ad, nisi ab. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Labor cum pariatur possimus quas, qui
              reprehenderit ut laboriosam, ea nesciunt magni animi, in corrupti
              aliquid deserunt aliquam! Ad, nisi ab. Lorem
            </p>

            <Popup
              trigger={
                <button variant="contained" className={classes.triggerButton}>
                  Become A Guide
                </button>
              }
              position="right center"
            >
              <div style={{ height: "300px", width: "500px", left: "50%" }}>
                Popup content here !!
              </div>
            </Popup>
          </span>
        </Grid>
        <Grid item xs={5}>
          <span>
            <img
              src={image}
              style={{
                height: "800px",
                position: "static",
               // paddingLeft: "9.0rem",
                width: "10.0rem",
              }}
              alt="cover"
            />
            {/* <h1
              style={{
                textAlign: "center",
                color: "Red",
                paddingLeft: "12.0rem",
              }}
            >
              Do You Want To Become A Guide?
            </h1> */}
          </span>
        </Grid>
      </Grid>
      <Grid
        container
        //spacing={2}
        style={{
          // backgroundColor: "#D3D3D3",
          //borderRadius: "2rem",
          marginTop: "2.0rem",
          marginBottom: "2.0rem",
          padding: "3px",
          height: "400px",
          //backgroundColor: "red",
          //marginLeft: "2.0rem",
          // padding: "20px",
          backgroundColor: "#339ba5",
        }}
      >
        <Grid item xs={12}>
          <span>
            <h1 className={classes.tour}> Create A New Tour </h1>
          </span>
          <span>
            <h3 className={classes.line}>
              jkaaaaaaaaaaaaaaaaaaaajkdnnnnnnnnnnksnaknsknlncask ccccccc
            </h3>
          </span>
          <Button
            variant="contained"
            //color="primary"
            className={classes.viewMore}
          >
            View More
          </Button>
        </Grid>
      </Grid>
      {/* <Grid container className={classes.guide}>
        <Grid item xs={6}>
          <span>
            <img
              src={image}
              style={{
                height: "800px",
                position: "static",
                paddingLeft: "5.0rem",
                paddingRight: "30px",

                width: "800px",
              }}
              alt="cover"
            />
            {/* <h1
              style={{
                textAlign: "center",
                color: "Red",
                paddingLeft: "12.0rem",
              }}
            >
              Do You Want To Become A Guide?
            </h1> */}
          </span>
        </Grid>
        <Grid item xs={6}>
          <span>
            <h1 style={{ paddingLeft: "50px" }}>Our Guide Will Help You!</h1>
            <p
              style={{
                fontSize: "1.0rem",
               // paddingLeft: "9.0rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              aliquam! Ad, nisi ab. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laborum sapiente cum pariatur possimus quas, qui
              reprehenderit ut laboriosam, ea nesciunt magni animi, in corrupti
              aliquid deserunt aliquam! Ad, nisi ab. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laborum sapiente dipisicing elit.
              Laborum sapiente cum pariatur possimus quas, qui reprehenderit ut
              laboriosam, ea nesciunt magni animi, in corrupti aliquid deserunt
              aliquam! Ad, nisi ab. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Labor cum pariatur possimus quas, qui
              reprehenderit ut laboriosam, ea nesciunt magni animi, in corrupti
              aliquid deserunt aliquam! Ad, nisi ab. Lorem
            </p>
            <Button
              variant="contained"
              //color="primary"
              style={{
                borderRadius: "20px",
                marginLeft: "5.0rem",
                backgroundColor: "#33abb8",
                color: "white",
              }}
            >
              Become A Guide
            </Button>
          </span>
        </Grid>
      </Grid> */}
      <h1
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "#339ba5",
        }}
      >
        {" "}
        Testimonials
      </h1>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={3} className={classes.testimonials}>
          <h1 style={{ textAlign: "center", color: "black" }}>User</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            amet? Magni blanditiis ipsa sapiente rem eum fugiat! Esse laboriosam
            rem ipsum cupiditate, suscipit corrupti. Quidem sit rem unde quae
            sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat! Esse
            laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem sit rem
            unde quae sed.
          </p>
        </Grid>
        <Grid item xs={3} className={classes.testimonials}>
          <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            amet? Magni blanditiis ipsa sapiente rem eum fugiat! Esse laboriosam
            rem ipsum cupiditate, suscipit corrupti. Quidem sit rem unde quae
            sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat! Esse
            laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem sit rem
            unde quae sed.
          </p>
        </Grid>
        <Grid item xs={3} className={classes.testimonials}>
          <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            amet? Magni blanditiis ipsa sapiente rem eum fugiat! Esse laboriosam
            rem ipsum cupiditate, suscipit corrupti. Quidem sit rem unde quae
            sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat! Esse
            laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem sit rem
            unde quae sed.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
