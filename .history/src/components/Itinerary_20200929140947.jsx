import React from "react";

const Itinerary = (props) => {
  return (
    <div style={{ marginTop: "1px" }}>
      <AllCities page={props.match.page} />
    </div>
  );
};

export default Itinerary;
