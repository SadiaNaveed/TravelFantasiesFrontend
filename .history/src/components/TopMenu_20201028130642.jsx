import React from "react";
import { Link } from "react-router-dom";
//import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "../2020-09-09 (2).png";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  customizeToolbar: {
    minHeight: 10,
    backgroundColor: "white",
  },

  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    //   fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <ul>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/"> Home </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/products"> Products </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/contactus"> Contact Us </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/login"> Login </Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Button varient="containd" color="secondary">
            SignUp
          </Button>
        </li>
      </ul> */}
      <AppBar
        position="fixed"
        color="primary"
        //position="fixed"
        //className={classes.appBar}
      >
        <Toolbar className={classes.customizeToolbar}>
          <img
            src={logo}
            style={{
              height: "100px",
              paddingRight: "3rem",
              paddingLeft: "2rem",
            }}
            alt="cover"
          />
          <Typography variant="h6">
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/products" className={classes.link}>
              Places To Visit In Pakistan
            </Link>
            <Link to="/contact-us" className={classes.link}>
              Contact Us
            </Link>
            <Link to="/about-us" className={classes.link}>
              About Us
            </Link>
            <Link to="/hotels/:page/:perPage" className={classes.link}>
              Hotels
            </Link>
            <Link to="/tours" className={classes.link}>
              Tours
            </Link>
            <Link to="/contact-us" className={classes.link}>
              Become A Host
            </Link>
            <Link to="/Blog" className={classes.link}>
              Blog
            </Link>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
            <Link to="/sign-up" className={classes.link}>
              Register
            </Link>
            <Link to="/itinerary/:page/:perPage" className={classes.link}>
              Itinerary
            </Link>
            <Link to="/hotel/compare" className={classes.link}>
              Compare Hotels
            </Link>
            <Link to = "/admin-dashboard" className={classes.link}>
              Admin Dashboard          
            </Link>
            <Link to = "/user-dashboard" className={classes.link}>
              User Dashboard          
            </Link>
            <Link to = "/guide-dashboard" className={classes.link}>
              Guide Dashboard          
            </Link>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
