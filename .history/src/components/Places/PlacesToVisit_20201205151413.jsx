import React, { Component, useCallback, useEffect } from "react";
import placeService from "../../services/PlaceService";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Sidebar from "../Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import cover from "../../runnyrem-LfqmND-hym8-unsplash.jpg";
import { Button, Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import SinglePlace from "./SinglePlace";

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
    width: "2500px",
  },
});

class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Img: "",
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
        this.setState({ place: data });

        // setTotal(data.total);
        // setPerPage(10);
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

    return (
      <div>
        <h1
          style={{
            position: "absolute",
            left: "300px",
            top: "350px",
            color: "white",
            fontSize: 70,
          }}
        >
          Places to Visit in Pakistan!{" "}
        </h1>
        <h1
          style={{
            position: "absolute",
            left: "420px",
            top: "420px",
            color: "white",
            fontSize: 70,
          }}
        >
          Find visiting places here!{" "}
        </h1>

        <img src={cover} style={{ width: "100%", height: "700px" }} />

        {this.state.places.length == 0 ? (
          <p>There are no places</p>
        ) : (
          <Grid container spacing={3}>
            {this.state.Place_Detail.map(
              (place, index) => (
                (place.Image =
                  "data:image/jpeg;base64," +
                  this.arrayBufferToBase64(place.Image.data.data)),
                (
                  // console.log(hotel.Image),
                  // <img src={hotel.Image} style={{height:"30px",width: "30px"}} alt='Helpful alt text'/>

                  <SinglePlace key={index} Place_Detail={place} />
                )
              )
            )}
          </Grid>
        )}
      </div>
    );
  }
}
export default withStyles(useStyles)(Place);
