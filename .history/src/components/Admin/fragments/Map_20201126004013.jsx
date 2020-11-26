import React from "react"
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps"


const innerMap = () => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 31.5204, lng: 74.3587 }}
    >
      <Marker position={{ lat: 31.5204, lng: 74.3587 }} />
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(innerMap))

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
