import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";
import queryString from "query-string";
import roomService from "../../services/RoomService";
import roomCategoryService from "../../services/RoomCategoryService";
import hotelService from "../../services/HotelService";
// import { KeyboardDatePicker } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
// import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardText,
  CardHeader,
  FormFeedback,
  CardBody,
} from "reactstrap";
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
      Image: "",
      Room: [],
      Category: [],
      guest: 0,
      startDate: new Date(),
      endDate: null,
      rooms: 0,
      errors: {},
      total: 0,
      diff: 0,
      details: props.location.state.detail,
    };

    console.log(this.state.details);

    //  this.onButtonClick = this.onButtonClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.onDateChange = this.onDateChange.bind(this);
    // this.handleRoomChange = this.handleRoomChange.bind(this);
    // this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPaymentButtonClick = this.onPaymentButtonClick.bind(this);
  }
  onPaymentButtonClick = () => {
    this.props.history.push({
      pathname: "/HotelPayment",
      state: {
        detail: this.state.details,
        totaldays: this.state.diff,
        totalAmount: this.state.total,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      const hotelId = queryString.parse(this.props.history.location.search);
      const roomSearch = hotelId.room;
      console.log(roomSearch);
      const categorySearch = hotelId.Category;
      console.log(categorySearch);
      this.props.history.push({
        pathname: "/HotelBooking",
        search:
          "?Category=" +
          categorySearch +
          "&room=" +
          roomSearch +
          "&hotel=" +
          this.state.hotel.HotelId,
      });
    } else {
      if (
        this.state.rooms == 0 &&
        this.state.guest == 0 &&
        this.state.endDate == null
      ) {
        //alert(this.state.errors.guests + "and" + this.state.errors.rooms);
        alert("Please fill the required fields and Select Check-in and out");
        //  console.log(this.state.errors);
      } else if (this.state.guest == 0) {
        //   alert(this.state.errors.guests);
        alert("Please select the number of guests");
        //console.log(this.state.errors.guests);
      } else if (this.state.endDate == null) {
        //   alert(this.state.errors.guests);
        alert("Please select the check-in and check-out");
        //console.log(this.state.errors.guests);
      } else {
        alert("Please select the number of rooms");
        // alert(this.state.errors.rooms);
        //console.log(this.state.errors.rooms);
      }
    }
  };
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);

    return endDate.diff(startDate, "days");
  }

  render() {
    //  const { hotel, history } = props;
    // const state = props.location.state.detail;

    // const daysLeft = this.calculateDaysLeft(startDate, endDate);
    //rooms*cost*days

    var start = moment(this.state.details.Start_Date);
    var end = moment(this.state.details.End_Date);
    var diffDays = end.diff(start, "days");
    this.setState({ diff: diffDays });
    console.log(this.state.diff);
    // this.setState({ days: diff });
    // To calculate the no. of days between two dates
    var totalAmount =
      this.state.details.rooms * this.state.diff * this.state.details.Room.Cost;
    this.setState({ total: totalAmount });
    return (
      <div
        style={{
          marginTop: "100px",
          marginLeft: "100px",
          marginBotton: "30px",
        }}
      >
        <h1>Booking Hotel</h1>

        <Grid container style={{ backgroundColor: "" }}>
          <Grid item xs={2}>
            <h2>Hotel</h2>
          </Grid>

          <Grid item xs={4}>
            <h2>{this.state.details.hotel.HotelName}</h2>
          </Grid>
          <Grid item xs={2}>
            <h2>Check-in</h2>
          </Grid>

          <Grid item xs={4}>
            <h2>
              {this.state.details.Start_Date} {this.state.details.Arrival_Time}
            </h2>
          </Grid>
          <Grid item xs={2}>
            <h2>Check-out</h2>
          </Grid>

          <Grid item xs={4}>
            <h2>
              {this.state.details.End_Date} {this.state.details.Departure_Time}
            </h2>
          </Grid>
          <Grid item xs={2}>
            <h2>Cost per Night</h2>
          </Grid>

          <Grid item xs={4}>
            <h2>{this.state.details.Room.Cost}</h2>
          </Grid>
          {/* <Grid item xs={6}>
            <img
              src={
                "data:image/jpeg;base64," +
                this.arrayBufferToBase64(
                  this.state.details.Room.Image.data.data
                )
              }
              style={{ width: "300px", height: "300px" }}
            />
          </Grid> */}
          <Grid item xs={2}>
            <h2>No. of Guests</h2>
          </Grid>

          <Grid item xs={4}>
            <h2>{this.state.details.guest}</h2>
          </Grid>

          <Grid item xs={2}>
            <h2>Number of Rooms</h2>
          </Grid>
          <Grid item xs={4}>
            <h2>{this.state.details.rooms}</h2>
          </Grid>
          <Grid item xs={2}>
            <h2>Number of Days</h2>
          </Grid>
          <Grid item xs={4}>
            <h2>{this.state.diff} Days</h2>
          </Grid>
          <Grid item xs={2}>
            <h2>Total Calculated Cost</h2>
          </Grid>
          <Grid item xs={4}>
            <h2>{this.state.total}</h2>
          </Grid>
        </Grid>

        <Button
          style={{
            backgroundColor: "white",
            border: "2px solid #4CAF50",
            borderRadius: "12px",
            color: "#4CAF50",
            fontSize: "24px",
            marginTop: "10px",
            marginLeft: "370px",
          }}
          onClick={
            //userService.getLoggedInUser()
            this.onPaymentButtonClick
          }
        >
          Proceed to Payment
        </Button>
      </div>
    );
  }
}

export default Checkout;
