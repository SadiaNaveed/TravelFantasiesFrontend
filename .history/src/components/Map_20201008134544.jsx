import React from "react";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import * as cityData from "../data/pk.json";

// function GMap() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 31.52037, lng: 74.358749 }}
//     >
//       {cityData.cities.map((markers) => (
//         <Marker
//           key={markers.ID}
//           position={{ lat: markers.position[0], lng: markers.position[1] }}
//         />
//       ))}
//     </GoogleMap>
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(GMap));

const MapWithDirections = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px`, width: "800px" }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(
            45.29233869999999,
            -70.06117489999997
          ),
          destination: new window.google.maps.LatLng(
            45.3570637,
            -70.06257679999999
          ),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
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
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));
const WrappedMap = withScriptjs(withGoogleMap(MapWithDirections));

export default function Map() {
  return (
    <div style={{ width: "98vw", height: "100vh", marginTop: "100px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

//
// const mapStyles = {
//   width: "100%",
//   height: "100%",
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       //   <Map
//       //     google={this.props.google}
//       //     zoom={14}
//       //     style={mapStyles}
//       //     initialCenter={{
//       //       lat: -1.2884,
//       //       lng: 36.8233,
//       //     }}
//       //   />

//       // <Map google={this.props.google} zoom={14}>
//       //   <Marker onClick={this.onMarkerClick} name={"Current location"} />

//       //   <InfoWindow onClose={this.onInfoWindowClose}>
//       //     <div></div>
//       //   </InfoWindow>
//       // </Map>
//       <Map></Map>
//     );
//   }
//}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
// })(Map);
