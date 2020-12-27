import React, { useState } from "react";
import mapStyles from "./../../mapStyles";
import placeService from "./../../services/PlaceService";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Grid, Select } from "@material-ui/core";
import { DirectionsRenderer, DistanceMatrixRenderer } from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
const AllCities = (props) => {
  const [places, setPlaces] = React.useState([]);
  const page = props.page ? props.page : 1;
  const [perPage, setPerPage] = React.useState(10);
  var directionServices = new window.google.maps.DirectionsService();
  var directionDisplay = new window.google.maps.DirectionsRenderer();
  const [address, setAddress] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [mode, setMode] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [coordinates2, setCoordinates2] = React.useState({
    lat: null,
    lng: null,
  });
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

  React.useEffect(getData, [page, perPage]);

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

        const DistanceService = new window.google.maps.DistanceMatrixService();

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
        DistanceMatrixService.route(
          {
            origin: coordinates,
            destination: coordinates2,
            //window.google.maps.TravelMode.DRIVING,
            travelMode: "DRIVING",
          },
          (result, status) => {
            if (status === window.google.maps.DistanceService.OK) {
              this.setState({
                distance: result,
              });
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
      {props.distance && <DistanceMatrixRenderer directions={props.distance} />}
    </GoogleMap>
  ));

  // function GMap() {
  //   const [selectedLocation, setSelectedLocation] = useState(null);
  //   const [selectedLocation2, setSelectedLocation2] = useState(null);
  //   return (
  //     <GoogleMap
  //       defaultZoom={8}
  //       defaultCenter={{ lat: 31.52037, lng: 74.358749 }}
  //       defaultOptions={{ styles: mapStyles }}
  //     >
  //       {/* {places.map((place, index) => (
  //         <Marker
  //           key={index}
  //           position={{
  //             lat: parseFloat(place.lat),
  //             lng: parseFloat(place.lng),
  //           }}
  //           onClick={() => {
  //             setSelectedLocation(place);
  //           }}
  //           // icon={{
  //           //   url: "/place-marker.png",
  //           //   scaledSize: new window.google.maps.Size(50, 50),
  //           // }}

  //         />
  //       ))} */}
  //       <Marker
  //         position={{
  //           lat: parseFloat(coordinates.lat),
  //           lng: parseFloat(coordinates.lng),
  //         }}
  //         onClick={() => {
  //           setSelectedLocation(coordinates);
  //         }}
  //       />
  //       {selectedLocation && (
  //         <InfoWindow
  //           position={{
  //             lat: parseFloat(selectedLocation.lat),
  //             lng: parseFloat(selectedLocation.lng),
  //           }}
  //           onCloseClick={() => {
  //             setSelectedLocation(null);
  //           }}
  //         >
  //           <div>
  //             <h2>{address}</h2>
  //           </div>
  //         </InfoWindow>
  //       )}
  //       <Marker
  //         position={{
  //           lat: parseFloat(coordinates2.lat),
  //           lng: parseFloat(coordinates2.lng),
  //         }}
  //         onClick={() => {
  //           setSelectedLocation2(coordinates2);
  //         }}
  //       />
  //       {selectedLocation2 && (
  //         <InfoWindow
  //           position={{
  //             lat: parseFloat(selectedLocation2.lat),
  //             lng: parseFloat(selectedLocation2.lng),
  //           }}
  //           onCloseClick={() => {
  //             setSelectedLocation2(null);
  //           }}
  //         >
  //           <div>
  //             <h2>{address2}</h2>
  //           </div>
  //         </InfoWindow>
  //       )}
  //     </GoogleMap>
  //   );
  // }

  // // const WrappedMap = withScriptjs(withGoogleMap(GMap));
  // //directionDisplay.setMap(WrappedMap);

  // const onChangeHandler = async () => {
  //   calculateAndDisplayRoute(directionServices, directionDisplay);
  //   coordinates.onChange = { onChangeHandler };
  //   coordinates2.onChange = { onChangeHandler };
  // };
  // const calculateAndDisplayRoute = async (
  //   directionServices,
  //   directionDisplay
  // ) => {
  //   directionServices.route(
  //     {
  //       origin: coordinates,
  //       destination: coordinates2,
  //       travelMode: "DRIVING",
  //     },
  //     function (response, status) {
  //       if (status === "OK") {
  //         directionDisplay.setDirections(response);
  //       } else {
  //         alert("Direction request failed due to" + status);
  //       }
  //     }
  //   );
  // };
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    //console.log(results[0].formatted_address);
    console.log(latLng.formatted_address);
    //infowindow.setContent(results[0].formatted_address);
    //console.log(results[0].formatted_address);
    setAddress(value);
    setCoordinates(latLng);
    console.log(latLng);
    console.log(results);
  };
  const handleSelect2 = async (value) => {
    const results2 = await geocodeByAddress(value);
    const latLng2 = await getLatLng(results2[0]);
    //console.log(results[0].formatted_address);
    console.log(latLng2.formatted_address);
    //infowindow.setContent(results[0].formatted_address);
    //console.log(results[0].formatted_address);
    setAddress2(value);
    setCoordinates2(latLng2);
    console.log(latLng2);
    console.log(results2);
  };
  // const getInitialState = async () => {
  //   return {
  //     value: "select",
  //   };
  // };
  const change = async (event) => {
    // this.setState({ value: event.target.value });
    setMode(event.target.value);
    //  console.log(mode);
  };

  return (
    // <div style={{ marginTop: "10px" }}>

    <div>
      <h1>Places</h1>
      <Grid container>
        <Grid item xs={3}>
          <PlacesAutoComplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div style={{ marginTop: "60px" }}>
                <h2>Start Location: {address} </h2>
                <p>Latitude: {coordinates.lat}</p>
                <p>Longitude: {coordinates.lng} </p>
                <input {...getInputProps({ placeholder: "Search Location" })} />
                <div>
                  {loading ? <div>....Loading </div> : null}
                  {suggestions.map((suggestion) => {
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
          <PlacesAutoComplete
            value={address2}
            onChange={setAddress2}
            onSelect={handleSelect2}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div style={{ marginTop: "60px" }}>
                <h2>End Location: {address2}</h2>
                <p>Latitude: {coordinates2.lat}</p>
                <p>Longitude: {coordinates2.lng} </p>
                <input {...getInputProps({ placeholder: "Search Location" })} />
                <div>
                  {loading ? <div>....Loading </div> : null}
                  {suggestions.map((suggestion) => {
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
          <hr></hr>
          <h2>Travel Mode</h2>
          <select onChange={change} value={mode}>
            <option value="DRIVING">Driving</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="WALKING">Walking</option>
          </select>

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

export default AllCities;
