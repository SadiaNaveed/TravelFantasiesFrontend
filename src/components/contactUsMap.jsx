import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
class ContactUsMap extends Component {
  render() {
    const style = {
      width: "900px",
      height: "900px",
    };
    return (
      <div style={{ width: "98vw", height: "100vh" }}>
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 31.5204,
            lng: 74.3587,
          }}
          //style={style}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
})(ContactUsMap);
