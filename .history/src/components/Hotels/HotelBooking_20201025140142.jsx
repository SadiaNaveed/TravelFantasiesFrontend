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
    const { hotel, history } = props;
    return (
    
      <div>
         Booking Hotel
          </div>

  
  );
};
}

  
  

export default HotelBooking;