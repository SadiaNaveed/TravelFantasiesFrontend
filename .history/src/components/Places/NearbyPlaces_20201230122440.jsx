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
const libraries = ["places"];

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
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
  //   libraries,
  // });
  // const mapRef = React.useRef(null);
  // const onMapLoad = React.useCallback((map) => {
  //   mapRef.current = map;
  // }, []);

  // const panTo = React.useCallback(({ lat, lng }) => {
  //   mapRef.current.panTo({ lat, lng });
  //   mapRef.current.setZoom(12);
  //   let map = mapRef.current;

  //   let request = {
  //     location: { lat, lng },
  //     radius: 8047,
  //     types: ["hospital"],
  //   };

  //   service = new window.google.maps.places.PlacesService(mapRef.current);
  //   service.nearbySearch(
  //     {
  //       location: { lat, lng },
  //       radius: "500",
  //       type: ["hospital"],
  //     },
  //     (results, status) => {
  //       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
  //         for (let i = 0; i < results.length; i++) {
  //           let place = results[i];
  //           new window.google.maps.Marker({
  //             position: place.geometry.location,
  //             map,
  //           });
  //         }
  //       }
  //     }
  //   );
  // }, []);
  const CreateMarker = (places) => {
    for (let i = 0; i < places.length; i++) {
      let place = places[i];
      new window.google.maps.Marker({
        position: place.geometry.location,
      });
    }
  };
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
        const service = new window.google.maps.places.PlacesService();

        service.nearbySearch(
          {
            location: { lat: 31.52, lng: 74.3587 },
            radius: "500",
            type: ["hospital"],
          },
          (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              this.setState({
                places: results,
              });
            }
          }
        );
      },
    })
  )((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 31.52, lng: 74.3587 }}>
      {props.places && <PlacesRenderer marker={CreateMarker(props.places)} />}
      {/* {props.distance && <DistanceMatrixRenderer directions={props.distance} />} */}
    </GoogleMap>
  ));

  return (
    <div>
      {/* <Search panTo={panTo} />
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      /> */}
      <MapWithADirectionsRenderer />
    </div>
  );
};

export default NearbyPlaces;
