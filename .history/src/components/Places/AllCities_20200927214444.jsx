import React, { useState } from "react";
import mapStyles from "./../../mapStyles";
// import { makeStyles } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
//import Map from "./Map";
import placeService from "./../../services/PlaceService";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
const AllCities = (props) => {
  //   //  const classes = useStyles();
  // const useStyles = makeStyles((theme) => ({}));
  const [places, setPlaces] = React.useState([]);
  const page = props.page ? props.page : 1;

  //   //const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);

  const getData = () => {
    placeService
      .getPlace(page, perPage)
      .then((data) => {
        setPlaces(data);
        // setTotal(data.total);
        setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  function GMap() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 31.52037, lng: 74.358749 }}
        defaultOptions={{ styles: mapStyles }}
      >
        {/* {places.map((place, index) => (
          <Marker
            key={index}
            position={{
              lat: parseFloat(place.lat),
              lng: parseFloat(place.lng),
            }}
            onClick={() => {
              setSelectedLocation(place);
            }}
            // icon={{
            //   url: "/place-marker.png",
            //   scaledSize: new window.google.maps.Size(50, 50),
            // }}
          />
        ))} */}
        <Marker
          position={{
            lat: coordinates.lat,
            lng: coordinates.lng,
          }}
          onClick={() => {
            setSelectedLocation(coordinates);
          }}
        />
        {selectedLocation && (
          <InfoWindow
            position={{
              lat: parseFloat(selectedLocation.lat),
              lng: parseFloat(selectedLocation.lng),
            }}
            onCloseClick={() => {
              setSelectedLocation(null);
            }}
          >
            <div>
              <h2>{address.formatted_address}</h2>
              <p>{selectedLocation.admin}</p>
            </div>
          </InfoWindow>
        )}
        {/* <Marker onClick={onMarkerClick} name={"Current Location"}></Marker> */}
      </GoogleMap>
      //<InfoWindow
      // marker={state.activeMarker}
      //  visible={state.showingInfoWindow}
      // onClose={onClose}
      //  ></InfoWindow>
      //  </GoogleMap>
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(GMap));

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    //console.log(results[0].formatted_address);
    //infowindow.setContent(results[0].formatted_address);
    console.log(address.formatted_address);
    setAddress(value);
    setCoordinates(latLng);
    console.log(latLng);
    console.log(results);
  };
  return (
    // <div style={{ marginTop: "10px" }}>

    <div>
      <h1>Places</h1>
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ marginTop: "100px" }}>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng} </p>
            <input {...getInputProps({ placeholder: "Search Location" })} />
            <div>
              {loading ? <div>....Loading </div> : null}
              {suggestions.map((suggestion, index) => {
                key = { index };
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutoComplete>

      <div style={{ width: "98vw", height: "90vh", marginTop: "140px" }}>
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

export default AllCities;
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
