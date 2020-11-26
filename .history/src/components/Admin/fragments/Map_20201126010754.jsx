//import { compose } from "@material-ui/system";
import React from "react";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import ReactDOM from "react-dom";
import { DirectionsRenderer } from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
const directions = { lat: 31.52037, lng: 74.358749 };

import * as cityData from "../data/pk.json";
// import { compose, lifecycle } from "recompose";
const directionDisplay = new window.google.maps.DirectionsRenderer();
const DirectionsService = new window.google.maps.DirectionsService();
function GMap() {
  DirectionsService.route(
    {
      origin: new window.google.maps.LatLng(31.52037, 74.358749),
      destination: new window.google.maps.LatLng(31.450365, 73.134964),
      travelMode: window.google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        // this.setState({
        //   directions: result,
        // });
        directionDisplay.setDirections(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 31.52037, lng: 74.358749 }}
    >
      <Marker position={{ lat: 31.52037, lng: 74.358749 }} />
      <Marker position={{ lat: 31.450365, lng: 73.134964 }} />
      {}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(GMap));
directionDisplay.setMap(WrappedMap);

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,

  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(31.5204, 74.3587),
          destination: new window.google.maps.LatLng(31.4504, 73.135),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    },
  })
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));
export default function Map() {
  return (
    <div style={{ width: "98vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      {/* <MapWithADirectionsRenderer /> */}
    </div>
  );
}
