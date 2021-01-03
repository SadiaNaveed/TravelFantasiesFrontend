import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import userService from "../../services/UserService";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: props.location.state.totalAmount,
      details: props.location.state.detail,
      hotel_id: props.location.state.detail.hotel._id,
      room_id: props.location.state.detail.Category._id,
      arrival_time: props.location.state.detail.Arrival_Time,
      departure_time: props.location.state.detail.Departure_Time,
      no_of_days: props.location.state.totaldays,
      check_in_date: props.location.state.detail.Start_Date,
      check_out_date: props.location.state.detail.End_Date,
      no_of_guests: props.location.state.detail.guest,
      no_of_rooms: props.location.state.detail.rooms,
      //userid, bboking date, days, cost, room type, check-in and check-out, no og guests, no of rooms booked
    };
    this.Ontoken = this.Ontoken.bind(this);
  }

  Ontoken = (token) => {
    // let token = userService.getLoggedInUser();
    let totalamount = this.state.totalAmount;
    const data = { token, totalamount };
    const date = new Date().toLocaleString();
    const formData = {
      Booking_Date: date,
      Room_id: this.state.room_id,
      Guest_id: userService.getLoggedInUser()._id,
      Hotel_id: this.state.hotel_id,
      Arrival_Time: this.state.arrival_time,
      Departure_Time: this.state.departure_time,
      No_of_Days: this.state.no_of_days,
      Cost: this.state.totalAmount,
      Check_in_Date: this.state.check_in_date,
      Check_out_Date: this.state.check_out_date,
      No_of_Guests: this.state.no_of_guests,
      No_of_Rooms: this.state.no_of_rooms,
    };

    // console.log(data);
    axios
      .post("http://localhost:4000/api/payment", data)
      .then((res) => {
        console.log(res);
        alert("Payment Successfull");
        axios
          .post("http://localhost:4000/api/hotelBookings", formData)
          .then((res) => {
            alert(res);
          });
      })
      .catch((err) => console.log(err));
  };

  render() {
    // let price = this.state.totalAmount * 100;
    return (
      <div style={{ marginBottom: "400px" }}>
        <h3 style={{ marginLeft: "200px", marginTop: "150px" }}>Pay Here</h3>
        <StripeCheckout
          stripeKey="pk_test_51HxugVIBUwNWeIqCVgirx6POCEN43DssyLK92T1lexgfdaJc3Yr0m4pbzqnd2dtk7TpT4lt5Gz2kzVtnua0E7Dod00cv5NlWXh"
          token={this.Ontoken}
          amount={this.state.totalAmount}
          description={`Total Pay  ` + this.state.totalAmount}
          style={{ marginLeft: "170px" }}
        />
      </div>
    );
  }
}

export default Payment;
