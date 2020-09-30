import React from "react";
import ItinerarySidebar from "./ItenerarySideBar";
import AllCities from "./Places/AllCities";
const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "500px" }}>
      <ItinerarySidebar />
      <AllCities page={props.match.page} />
    </div>
  );
};

export default Itinerary;
