import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ShortBanner from "./ShortBanner";
import WhatsNew from "./WhatsNew";
import SingleTour from "./SingleTour";
import { UncontrolledCarousel } from "reactstrap";
import update from "immutability-helper";
import SearchBox from "./SearchBox";
//import SearchBar from "./SearchBar";
import AllTours from "./AllTours";

import axios from "axios";
function Tours(props) {
  // const [ tours, setTours] = useState([]);
  // useEffect(()=>{
  //     axios.get('http://localhost:4000/api/tours').then(res=>{
  //       console.log('RES-----', res.data)
  //       setTours(res.data)
  //     }).catch(err=>{
  //       console.log('--error--',err)
  //     })

  // },[])
  return (
    <div>
      <Banner />
      <ShortBanner />
      <WhatsNew setcurrentGuide={props.setcurrentGuide} />
      <AllTours />
      {/* <AllTours result={tours}/> */}
    </div>
  );
}

export default Tours;
