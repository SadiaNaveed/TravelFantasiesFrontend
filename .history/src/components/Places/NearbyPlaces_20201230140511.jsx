import React, { useState } from "react";
import mapStyles from "./../../mapStyles";
import {
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Grid, Select, Button } from "@material-ui/core";
import {
  DirectionsRenderer,
  DistanceMatrixRenderer,
  PlacesRenderer,
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
import Search from "./Search";

let service;
const libraries = ["places", "geometry", "drawing"];

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 31.52,
  lng: 74.3587,
};

const NearbyPlaces = (props) => {
  const [places, setPlaces] = React.useState([]);

  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const map = new window.google.maps.Map({
    center: { lat: 31.52, lng: 74.3587 },
    zoom: 15,
  });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

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
        // navigator.geolocation.getCurrentPosition(function (position) {
        //   console.log("Latitude is :", position.coords.latitude);
        //   console.log("Longitude is :", position.coords.longitude);
        // });
        mapRef.current.panTo({ lat: 31.52, lng: 74.3587 });
        mapRef.current.setZoom(12);
        let map = mapRef.current;

        let request = {
          key: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
          location: { latitude: 31.52, longitude: 74.3587 },
          radius: "500",
          type: ["hospital"],
        };

        service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
        function callback(results, status) {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              let place = results[i];
              new window.google.maps.Marker({
                position: place.geometry.location,
                map,
              });
            }
          }
        }
      },
    })
  )((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 31.52, lng: 74.3587 }}>
      {props.directions && <DirectionsRenderer directions={props.directions} />}
      {/* {props.distance && <DistanceMatrixRenderer directions={props.distance} />} */}
    </GoogleMap>
  ));

  return (
    // <div style={{ marginTop: "10px" }}>

    <div>
      <h1>Itinerary Generator</h1>
      <Grid container>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              navigator.geolocation.getCurrentPosition(function (position) {
                setCoordinates({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              });
            }}
          >
            Use My Location For Start Location
          </Button>
        </Grid>
        <Grid item xs={9}>
          <div style={{ width: "73vw", height: "90vh", marginTop: "20px" }}>
            {/* <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            /> */}
            <MapWithADirectionsRenderer />
            <GoogleMap
              id="map"
              mapContainerStyle={mapContainerStyle}
              ref={mapRef}
              zoom={20}
              center={center}
              options={options}
              onLoad={onMapLoad}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default NearbyPlaces;
