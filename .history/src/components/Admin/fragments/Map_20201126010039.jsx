import React from "react"
// import {
//   GoogleMap,
//   Marker,
//   withGoogleMap,
//   withScriptjs,
// } from "react-google-maps"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


// const displayMap = () => {
//   return (
//     <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         >
//           <Marker position={{ lat: 48.00, lng: -122.00}} />
//         </Map>
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))
const mapStyles = {
  width: '100%',
  height: '100%',
};
const MapContainer = () => {
  return (
       <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
  )
}

export default GoogleApiWrapper({
  apiKey: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw'
})(MapContainer);
