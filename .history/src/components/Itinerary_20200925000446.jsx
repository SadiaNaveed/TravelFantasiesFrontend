import React from "react";
// import { makeStyles } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
//import Map from "./Map";
import placeService from "./../services/PlaceService";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
// const useStyles = makeStyles((theme) => ({}));

const Itinerary = (props) => {
  //  const classes = useStyles();
  const [places, setPlaces] = React.useState([]);
  // const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  //const [total, setTotal] = React.useState(0);
  //const [perPage, setPerPage] = React.useState(10);
  const perPage = 10;
  const getData = () => {
    placeService
      .getPlace(page, perPage)
      .then((data) => {
        console.log(data);
        setPlaces(data);
        // setTotal(data.total);
        //setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
  function GMap() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 31.52037, lng: 74.358749 }}
      >
        {places.map((place, index) => (
          <Marker key={index} position={{ lat: place.lat, lng: place.lng }} />
        ))}
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(GMap));

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Places</h1>
      <div style={{ width: "98vw", height: "100vh", marginTop: "100px" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default Itinerary;
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
