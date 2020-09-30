import React from "react";
import ItinerarySidebar from "./ItenerarySideBar";
import AllCities from "./Places/AllCities";
import Footer from "./Footer";
const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "1px" }}>
      <ItinerarySidebar />
      <AllCities page={props.match.page} />
    </div>
  );
};

export default Itinerary;
