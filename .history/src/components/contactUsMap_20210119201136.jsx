import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export default function ContactUsMap() {
  return (
    <div style={{ width: "98vw", height: "100vh" }}>
      <Map
        google={this.props.google}
        zoom={10}
        initialCenter={{
          lat: 35.5496939,
          lng: -120.7060049,
        }}
        style={style}
      >
        <Marker />
      </Map>
    </div>
  );
}
