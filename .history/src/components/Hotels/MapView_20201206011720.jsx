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

const directionDisplay = new window.google.maps.DirectionsRenderer();
const DirectionsService = new window.google.maps.DirectionsService();

function GMap() {
  const [lat, setLat] = React.useState(31.52037);
  const [lng, setLng] = React.useState(73.134964);
  const [markers, setMarker] = React.useState({
    // name: "Current position",
    // position: {
    lat: 31.52037,
    lng: 74.358749,
    // },
  });
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 31.52037, lng: 74.358749 }}
    >
      <Marker position={markers} draggable={true} />
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(GMap));
directionDisplay.setMap(WrappedMap);

export default function MapView() {
  const hotelId = queryString.parse(this.props.history.location.search);
  const hotelSearch = hotelId.hotel;
  console.log(hotelSearch);
  return (
    <div style={{ width: "98vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        // onMarker={onMarkerDrag}
      />
    </div>
  );
}
