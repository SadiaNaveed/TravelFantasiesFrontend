import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import cover from "../hotelCover.jpg";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";
import { Grid, TextField } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      marginTop: "50px",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    testimonials: {
      backgroundColor: "white",
      border: "ridge",
      borderBottom: "solid",
      borderColor: "white",
      borderBottomColor: "#339ba5",
      borderRadius: "10px",
      marginRight: "50px",
      marginLeft: "50px",
      marginBottom: "50px",
    },
    imgTextWrapper: {
      position: "absolute",
      top: "0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      paddingLeft: "100px",
      paddingRight: "100px",
    },
    imageWrapper: {
      verticalAlign: "top",
      display: "inlineBlock",
      textAlign: "center",
      width: "120px",
    },
    divStyle: {
      display: "block",
    },
    subtitle: {
      transition: "1s ease-in-out",
      color: "transparent",
    },
  })
);

const Hotels = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid
        container
        style={{
          marginBottom: "30px",
          marginTop: "40px",
        }}
      >
        <Grid item xs={12}>
          <img src={cover} width="100%" height="50%" alt="cover" />
        </Grid>
      </Grid> */}
      <div>
        <div className="image-wrapper">
          <img src={cover} alt="" />
          <div className={divStyle}>
            <h3>Are you new patient?</h3>
            <p>
              Get the best possible support during and after pregnancy by
              registering with your local health authority
            </p>
          </div>
        </div>
      </div>
      {/* <Sidebar> </Sidebar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1 style={{ textAlign: "center" }}> Hotels Of Pakistan </h1>

        <TextField style={{ position: "absolute", right: "0px" }}>
          {" "}
          Search Hotels{" "}
        </TextField>
        <hr></hr>

        <Grid container wrap="wrap" spacing={2}>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
          <Grid item xs={3} className={classes.testimonials}>
            <h1 style={{ textAlign: "center", color: "black" }}>User</h1>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, amet? Magni blanditiis ipsa sapiente rem eum fugiat!
              Esse laboriosam rem ipsum cupiditate, suscipit corrupti. Quidem
              sit rem unde quae sed. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, amet? Magni blanditiis ipsa sapiente
              rem eum fugiat! Esse laboriosam rem ipsum cupiditate, suscipit
              corrupti. Quidem sit rem unde quae sed.
            </p>
          </Grid>
        </Grid>
      </main> */}
    </div>
  );
};
export default Hotels;
