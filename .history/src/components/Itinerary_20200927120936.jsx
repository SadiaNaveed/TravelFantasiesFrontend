import React from "react";
import ItinerarySidebar from "./ItenerarySideBar";
import AllCities from "./Places/AllCities";
import Map from "./Map";
// function handleClick(e) {
//   e.preventDefault();
//   alert("The link was clicked.");
// }
const handleClick = () => {
  return <Map />;
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
