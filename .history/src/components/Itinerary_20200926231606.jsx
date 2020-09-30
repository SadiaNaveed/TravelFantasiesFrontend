import React from "react";
import ItinerarySidebar from "./ItenerarySideBar";
import AllCities from "./Places/AllCities";
const Itinerary = () => {
  return (
    <div style={{ marginTop: "500px" }}>
      <ItinerarySidebar />
      <AllCities />
    </div>
  );
};

export default Itinerary;
