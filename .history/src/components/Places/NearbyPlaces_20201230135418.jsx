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
        const DirectionsService = new window.google.maps.DirectionsService();

        const DistanceService = new window.google.maps.DistanceMatrixService();
       

 

    let request = {
      key: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
      location: { latitude: lat, longitude: lng },
      radius: "500",
      type: ["hospital"],
    };

    service = new window.google.maps.places.PlacesService(map);
    service.(request, callback);
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

        
        DirectionsService.route(
          {
            origin: coordinates,
            destination: coordinates2,
            //window.google.maps.TravelMode.DRIVING,
            travelMode: mode,
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
        DistanceService.getDistanceMatrix(
          {
            destinations: [coordinates],
            origins: [coordinates2],
            travelMode: mode,
          },
          (result, status) => {
            if (status === "OK") {
              // this.setState({
              //   distance: result,
              // });
              console.log(result.rows[0].elements[0].distance.text);
              setTime(result.rows[0].elements[0].duration.text);
              setDist(result.rows[0].elements[0].distance.text);
              console.log(result.rows[0].elements[0].duration.text);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
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

          <hr></hr>
          <h2>Travel Mode</h2>
          <select onChange={change} value={mode}>
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
          </select>
          <h3>{time}</h3>
          <h3>{dist}</h3>
          {/* <p>{mode}</p> */}
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
};


const NearbyPlaces = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
    let map = mapRef.current;

    let request = {
      key: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
      location: { latitude: lat, longitude: lng },
      radius: "500",
      type: ["hospital"],
    };

    service = new window.google.maps.places.PlacesService(mapRef.current);
    service.(request, callback);
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
  }, []);

  return (
    <div>
      <Search panTo={panTo} />
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
  );
};

export default NearbyPlaces;
