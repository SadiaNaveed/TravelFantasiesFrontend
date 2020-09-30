import React from "react";
// import { makeStyles } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
//import placeService from "./../services/PlaceService";
import AllCities from "./Places/AllCities";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import WrappedMap from "react-google-maps";

// const useStyles = makeStyles((theme) => ({}));

const Itinerary = (props) => {
  const [perPage, setPerPage] = React.useState(10);
  const [op, setOp] = React.useState("Cities");
  const handleAllCitiesClick = () => <AllCities perPage={perPage} />;
  //console.log(props);
  // props.history.push("/products/new");

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Places</h1>
      <select
        value={op}
        onChange={(e) => setOp(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="Hotels">Two</option>
        <option value="Northern Areas">Ten</option>
      </select>
      <Fab
        color="primary"
        aria-label="add"
        //className={classes.addBtn}
        onClick={handleAllCitiesClick}
      >
        <AddIcon />
      </Fab>
      <div style={{ width: "98vw", height: "100vh", marginTop: "100px" }}>
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

export default Itinerary;
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
