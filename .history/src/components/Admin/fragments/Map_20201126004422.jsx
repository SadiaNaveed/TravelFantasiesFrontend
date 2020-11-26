import React from "react"
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps"


// const innerMap = () => {
//   return (
//     <GoogleMap
//       defaultZoom={15}
//       defaultCenter={{ lat: 31.5204, lng: 74.3587 }}
//     >
//       <Marker position={{ lat: 31.5204, lng: 74.3587 }} />
//     </GoogleMap>
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(innerMap))

const Map = () => {
  return (
       <GoogleMap
      defaultZoom={zoom}
      defaultCenter={center}
      onZoomChanged={handleZoomChanged}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}

export default Map
