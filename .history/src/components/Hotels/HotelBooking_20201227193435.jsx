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
class HotelBooking extends Component {
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
    };
    //  this.onButtonClick = this.onButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPaymentButtonClick = this.onPaymentButtonClick.bind(this);
  }
  onPaymentButtonClick = () => {
    this.props.history.push({
      pathname: "/HotelPayment",
      // search: "?total=" + total,
    });
  };
  handleChange = (event) => {
    this.setState({ guest: event.target.value });
  };
  handleRoomChange = (event) => {
    this.setState({ rooms: event.target.value });
  };
  handleValidation() {
    let room = this.state.rooms;
    let guests = this.state.guest;
    let date = this.state.endDate;
    let errors = {};
    let formIsValid = true;

    //Name
    if (room == 0) {
      formIsValid = false;
      errors["room"] = "Cannot be empty";
      //this.setState({ errors: errors  });
    }

    if (guests == 0) {
      //  if(!fields["name"].match(/^[a-zA-Z]+$/)){
      formIsValid = false;
      errors["guests"] = "Cannot be empty";
      // this.setState({ errors: errors });
      //}
    }
    if (date == null) {
      formIsValid = false;
      errors["date"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
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
  onDateChange = (dates) => {
    const [start, end] = dates;
    this.setState({ startDate: start });
    this.setState({ endDate: end });
    console.log(this.state.startDate);
    console.log(this.state.endDate);
  };

  componentDidMount() {
    const hotelId = queryString.parse(this.props.history.location.search);
    const hotelSearch = hotelId.hotel;
    console.log(hotelSearch);
    const roomSearch = hotelId.room;
    console.log(roomSearch);
    const categorySearch = hotelId.Category;
    console.log(categorySearch);
    //  this.props.history.push({
    //     pathname: '/HotelBooking',
    //    search: '?hotel=' + hotelSearch +'&room=' +this.props.room._id,

    //  })
    hotelService
      .getSingleHotel(hotelSearch)
      .then((data) => {
        this.setState({ hotel: data });
        this.setState({
          Image:
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.state.hotel.Image.data.data),
        });
      })
      .catch((err) => {
        console.log(err);
      });

    roomService
      .getSingleRoom(roomSearch)
      .then((data) => {
        this.setState({ Room: data });
        console.log(this.state.Room);
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });

    // const categorySearch = this.state.Room.Category;
    // console.log(categorySearch);

    roomCategoryService
      .getSingleRoomCategory(categorySearch)
      .then((data) => {
        this.setState({ Category: data });
        console.log(this.state.Category);
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);

    return endDate.diff(startDate, "days");
  }

  render() {
    //  const { hotel, history } = props;
    const { startDate, endDate } = this.state;
    var total = 0;
    const daysLeft = this.calculateDaysLeft(startDate, endDate);
    total = this.state.rooms * 2 * this.state.Room.Cost;
    return (
      <div
        style={{
          marginTop: "100px",
          marginLeft: "100px",
          marginBotton: "30px",
        }}
      >
        <h1>Booking Hotel</h1>

        <Grid container style={{ backgroundColor: "#33ba95" }}>
          <Grid item xs={2}>
            <h2>Cost per Night</h2>
          </Grid>

          <Grid item xs={10}>
            <h2>{this.state.Room.Cost}</h2>
          </Grid>
          <Grid item xs={2}>
            <h2>No. of Days</h2>
          </Grid>
          <Grid item xs={10}>
            <h2>{2}</h2>
          </Grid>
          <Grid item xs={2}>
            <h2>Number of Rooms</h2>
          </Grid>
          <Grid item xs={10}>
            <h2>{this.state.rooms}</h2>
          </Grid>
          <Grid item xs={2}>
            <h2>Total Calculated Cost</h2>
          </Grid>
          <Grid item xs={10}>
            <h2>{total}</h2>
          </Grid>
          <img
            src={
              "data:image/jpeg;base64," +
              this.arrayBufferToBase64(this.state.hotel.Image.data.data)
            }
            style={{ width: "300px", height: "300px" }}
          />
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
        <div style={{ marginTop: 50 }}>
          <Col sm="12">
            <Card>
              <CardHeader>
                Please Fill Out The Hotel Booking Form To Continue
              </CardHeader>
              <CardBody>
                <Form>
                  <CardTitle tag="h3">Details About Hotel Booking</CardTitle>

                  <Row form>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                        <Label for="Place">Hotel Name</Label>
                        <Input
                          type="text"
                          name="hotel"
                          placeholder={this.state.hotel.HotelName}
                          readOnly
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                        <Label for="exampleDate">Room Type</Label>
                        <Input
                          type="text"
                          name="room"
                          id="exampleDate"
                          placeholder={this.state.Category.CategoryName}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                        <Label for="exampleDate">No of Guests</Label>
                        <FormControl variant="outlined" fullWidth>
                          {this.state.Category.CategoryName ==
                            "Single Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "King Double Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Queen Double Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Single Deluxe Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}

                          {this.state.Category.CategoryName ==
                            "Double Deluxe Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Double-Double (Twin Double) Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName == "Twin Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Hollywood Twin Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}

                          {this.state.Category.CategoryName ==
                            "Duplex Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Cabana Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Studio Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName == "Lanai Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Regular Suite Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Penthouse Suite Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName ==
                            "Presidential Suite Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                          {this.state.Category.CategoryName == "Sico Room" && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.guest}
                              onChange={this.handleChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                        </FormControl>
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                        <Label for="exampleDate">No of Rooms</Label>
                        <FormControl variant="outlined" fullWidth>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.rooms}
                            onChange={this.handleRoomChange}
                            fullWidth
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                          </Select>
                        </FormControl>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                        <Label for="exampleTime">Check-in Date</Label>
                        <Input
                          type="date"
                          name="date"
                          id="exampleDate"
                          placeholder="date placeholder"
                          onChange={(event) =>
                            this.setState({ End_Date: event.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                        <Label for="exampleTime">Check-out Date</Label>
                        <Input
                          type="date"
                          name="date"
                          id="exampleDate"
                          placeholder="date placeholder"
                          onChange={(event) =>
                            this.setState({ End_Date: event.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                        <Label for="exampleTime">Check-in Time</Label>

                        <Input
                          type="time"
                          name="time"
                          id="exampleTime"
                          placeholder="time placeholder"
                          onChange={(event) =>
                            this.setState({ Arrival_Time: event.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                        <Label for="exampleTime">Check-out Time</Label>

                        <Input
                          type="time"
                          name="time"
                          id="exampleTime"
                          placeholder="time placeholder"
                          onChange={(event) =>
                            this.setState({
                              Departure_Time: event.target.value,
                            })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Cost">Cost (Room Per Night)</Label>
                        <Input
                          type="Number"
                          placeholder={this.state.Room.Cost}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                      Agree to Terms and Conditions
                    </Label>
                  </FormGroup>
                  <Button
                    style={{
                      marginTop: 30,
                      alignSelf: "center",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                    type="submit"
                  >
                    Proceed To Checkout
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </div>
      </div>
    );
  }
}

export default HotelBooking;
