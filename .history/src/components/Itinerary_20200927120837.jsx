import React from "react";
import ItinerarySidebar from "./ItenerarySideBar";
import AllCities from "./Places/AllCities";
import Map from "./Map";
import Footer from "./Footer";
// function handleClick(e) {
//   e.preventDefault();
//   alert("The link was clicked.");
// }
const handleClick = () => {
  <Map />;
};
const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "1px" }}>
      <ItinerarySidebar handleClick={handleClick} />
      {/* <Map /> */}
      <AllCities page={props.match.page} />
    </div>
  );
};

export default Itinerary;
