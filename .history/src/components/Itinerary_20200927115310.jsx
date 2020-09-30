import React from "react";
import ItinerarySidebar from "./ItenerarySideBar";
import AllCities from "./Places/AllCities";
import Map from "./Map";
import Footer from "./Footer";
function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}

const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "1px" }}>
      <button style={{ marginLeft: "50%" }} onclick={handleClick}>
        Activate Lasers
      </button>
      <ItinerarySidebar />
      <Map />
      <AllCities page={props.match.page} />
    </div>
  );
};

export default Itinerary;
