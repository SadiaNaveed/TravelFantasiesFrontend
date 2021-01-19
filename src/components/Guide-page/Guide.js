import React from "react";
import Banner from "./Banner";
import ShortBanner from "./ShortBanner";
import WhatsNew from "./WhatsNew";
//import SearchBar from "./SearchBar";

function Guide(props) {
  return (
    <div>
      <Banner />
      <ShortBanner />
      <WhatsNew setcurrentGuide={props.setcurrentGuide} />
    </div>
  );
}

export default Guide;
