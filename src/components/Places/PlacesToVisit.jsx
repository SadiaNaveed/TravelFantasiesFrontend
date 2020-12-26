import React, { Component, useCallback, useEffect } from "react";
import placeService from "../../services/PlaceService";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Sidebar from "../Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import cover from "../../Tourism (1).jpg";
import { Button, Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import SinglePlace from "./SinglePlace";
import { UncontrolledCarousel } from "reactstrap";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    marginTop: "50px",
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
    height: "10px",
    //  objectFit: "contain",
    alignItems: "left",
    width: "270px",
  },
});

class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Img: "",
      name:"",
      city: " ",
      places: [],
    };
  }

  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    placeService
      .getPlace(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ places: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const handleChange = async (value) => {
      this.setState({ city: value });
    };

    const classes = useStyles();
    const items = [
      {
        src: require("../../Karachi laguna.jpg"),
        height: "30 px",
        altText: "Slide 1",
        caption: "Starting from 200$",
        header: "Spend Great Time With Family With Our Family Package",
        key: "1",
      },

      {
        src: require("../../Faisal_Masjid.jpg"),
        height: "30 px",
        altText: "Slide 3",
        caption: "Starting From 100$",
        header: "Hit The Road of Adventure With Friends ",
        key: "3",
      },
      {
        src: require("../../Tourism (1).jpg"),
        height: "30 px",
        altText: "Slide 2",
        caption: "Honeymoon Starting From 500$",
        header: "Spend Pleasure Time With Your Better Half",
        key: "2",
      },
    ];

    return (
      <div>
       <UncontrolledCarousel className="danger" items={items} />
        {this.state.places.length == 0 ? (
          <p>There are no places</p>
        ) : (
          <Grid container spacing={4}>
            {this.state.places.map((place, index) => (
              <SinglePlace key={index} Place={place} />
            ))}
          </Grid>
        )}
      </div>
    );
  }
}
export default withStyles(useStyles)(Place);