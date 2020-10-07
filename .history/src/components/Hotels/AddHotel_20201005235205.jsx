import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import cover from "../hotelCover.jpg";
import hotelService from "../../services/HotelService";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Sidebar from "../Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  // Grid,
  // TextField,
} from "@material-ui/core";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { fontSize } from "@material-ui/system";
import SingleHotel from "./SingleHotel";

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

    divStyle: {
      display: "block",
    },
    card: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    media: {
      display: "flex",
      height: 500,
      //  objectFit: "contain",
      alignItems: "left",
      width: "2500px",
    },
  })
);

const addHotel = (props) => {
  return (
    // <div className={classes.root}>
    <div style={{ marginTop: "100px" }}></div>
  );
};
export default addHotel;
