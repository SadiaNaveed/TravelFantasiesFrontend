import React from "react"
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps"


const Map = () => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: lat, lng: lng }}
    >
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const Map = () => {
  return (
    <Layout>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js? 
        key=my_key&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<Loading />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Layout>
  )
}

export default Map
