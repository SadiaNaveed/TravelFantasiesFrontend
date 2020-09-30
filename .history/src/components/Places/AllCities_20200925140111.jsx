import React from "react";
import placeService from "./../services/PlaceService";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
const AllCities = (props) => {
  //   //  const classes = useStyles();
  const [places, setPlaces] = React.useState([]);
  const page = props.match.params.page ? props.match.params.page : 1;
  //   //const [total, setTotal] = React.useState(0);
  const getData = () => {
    placeService
      .getPlace(page, props.perPage)
      .then((data) => {
        setPlaces(data);
        // setTotal(data.total);
        //setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
  function GMap() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 31.52037, lng: 74.358749 }}
      >
        {places.map((place, index) => (
          <Marker
            key={index}
            position={{
              lat: parseFloat(place.lat),
              lng: parseFloat(place.lng),
            }}
          />
        ))}
      </GoogleMap>
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(GMap));
};
export default AllCities;
