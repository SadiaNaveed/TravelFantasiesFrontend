import React from "react";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
//import * as cityData from "../data/pk.json";
import { compose, lifecycle } from "recompose";

function GMap() {
  const directionDisplay = new window.google.maps.DirectionsRenderer();
  const DirectionsService = new window.google.maps.DirectionsService();

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
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(GMap));

export default function Map() {
  return (
    <div style={{ width: "98vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
