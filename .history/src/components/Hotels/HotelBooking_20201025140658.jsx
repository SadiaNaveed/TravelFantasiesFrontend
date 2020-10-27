import React, { Component } from "react";

class HotelBooking extends Component{
  constructor(props) {
        super(props);
      this.state = {
          hotel: [],
          Image: " ",
        }
        //  this.onButtonClick = this.onButtonClick.bind(this);    
    }
  render() {
  //  const { hotel, history } = props;
    return (
    
      <div style={{marginTop:"100px" ,marginLeft:"100px" , marginBotton:"30px"}}>
        <h1>Booking Hotel</h1> 
          </div>

  
  );
};
}

  
  

export default HotelBooking;