import React, { Component } from "react";
import Axios from "axios";
import userService from "../../services/UserService";
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
import { sub } from "date-fns";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class BookGuide extends Component {
  //  constructor(props){
  //      super(props);
  //      this.state = {
  //         GuideName: "",
  //         Booking_Date:" ",
  //         ContactNo: 0,
  //         Email:"",
  //         Cost: 0,
  //         Experience: "",
  //         selectedPaymentMethod: null,
  //         Host_Id:"",

  //       };
  // }

  handleToken = (token, price) => {
    let product = {
      name: this.props.currentGuide.GuideName,
      price: price,
    };
    console.log(product);
    Axios.post("http://localhost:4000/api/BookGuides/checkout", {
      token,
      product,
    })
      .then((res) => {
        console.log("---client----", res.data);
        if (res.data.status === "success") {
          alert("Successfully booked");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log(userService.getLoggedInUser()._id);
    Axios.post("http://localhost:4000/api/BookGuides", {
      GuideName: this.state.GuideName,
      Booking_Date: this.state.Booking_Date,
      ContactNo: this.state.ContactNo,
      Email: this.state.Email,
      Cost: this.state.Cost,
      Location: this.state.Location,
      Experience: this.state.Experience,
      Host_Id: userService.getLoggedInUser()._id,
    })
      .then((res) => {
        console.log("---client----", res.data);
        if (res.status === 200) {
          alert("Success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  emailChangeHandler(value) {
    if (value.length == 0) {
      this.setState({
        isEmailValid: true,
      });
    } else {
      this.setState({
        isEmailValid: false,
        email: value,
      });
    }
  }

  state = { selectedPaymentMethod: null, isEmailValid: false, email: "" };
  emailChangeHandler(value) {
    if (value.length == 0) {
      this.setState({
        isEmailValid: true,
      });
    } else {
      this.setState({
        isEmailValid: false,
        email: value,
      });
    }
  }
  render() {
    console.log(".....test...");
    return (
      <div style={{ marginTop: 50 }}>
        {/* <form
          enctype="multipart/form-data"
          style={{
            marginBottom: "50px",
            paddingLeft: "300px",
            paddingRight: "300px",
            borderColor: "black",
            borderRadius: "30px",
            borderStyle: "bold",
          }}
        > */}
        <Col sm="12">
          <Card>
            <CardHeader>
              Please Fill Out The Tour Booking Form To Continue
            </CardHeader>
            <CardBody>
              <CardTitle tag="h3">Details About Guide Booking</CardTitle>

              {/* <Row form>
                     <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                  <Label for="Place">Package_Name</Label>
                  <Input
                    type="text"
                    name="place"
                    placeholder="Enter the Place You want to Visit"
                    onChange={(event)=> this.setState({PackageName: event.target.value})}
                  />
                  </FormGroup>
                  </Col>

                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                    <Label for="exampleDate">Booking_Date</Label>
                          <Input
                              type="date"
                              name="date"
                              id="exampleDate"
                              placeholder="date placeholder"
                              onChange={(event)=> this.setState({Booking_Date:event.target.value})}
                         />
                  </FormGroup>
                  </Col>
                  </Row>
                    
                    <Row form>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                      <Label for="exampleDate">Start_Date</Label>
                          <Input
                              type="date"
                              name="date"
                              id="exampleDate"
                              placeholder="date placeholder"
                              onChange={(event)=> this.setState({Start_Date:event.target.value})}
                         />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                    <Label for="exampleDate">End_Date</Label>
                    <Input
                              type="date"
                              name="date"
                              id="exampleDate"
                              placeholder="date placeholder"
                              onChange={(event)=> this.setState({End_Date:event.target.value})}
                         />
                      
                      </FormGroup>
                    </Col>
                  </Row>

                <Row form>
                    <Col md={6} sm={12} lg={6}>
                      <FormGroup>
                      <Label for="exampleTime">Arrival_Time</Label>
                         <Input
                           type="time"
                           name="time"
                           id="exampleTime"
                           placeholder="time placeholder"
                           onChange={(event)=> this.setState({Arrival_Time:event.target.value})}
                         />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleTime">Departure_Time</Label>
                         <Input
                           type="time"
                           name="time"
                           id="exampleTime"
                           placeholder="time placeholder"
                           onChange={(event)=> this.setState({Departure_Time:event.target.value})}
                         />
                      </FormGroup>
                    </Col>
                  </Row> */}

              <Row form>
                <Col md={6} sm={12} lg={4}>
                  <FormGroup>
                    <Label for="Name">GuideName</Label>
                    <Input
                      type="text"
                      placeholder="Enter Your Name Here"
                      value={this.props.currentGuide.GuideName}
                      // // onChange={(event) =>
                      // //   this.setState({ GuideName: event.target.value })
                      // }
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} lg={6}>
                  <FormGroup>
                    <Label for="exampleDate">Booking_Date</Label>
                    <Input
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="date placeholder"
                      onChange={(event) =>
                        this.setState({ Booking_Date: event.target.value })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6} sm={12} lg={4}>
                  <FormGroup>
                    <Label for="Number">ContactNo</Label>
                    <Input
                      type="Number"
                      value={this.props.currentGuide.ContactNo}
                      // onChange={(event) =>
                      //   this.setState({ ContactNo: event.target.value })
                      // }
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} lg={4}>
                  <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                      value={this.props.currentGuide.Email}
                      // onChange={(event) => {
                      //   this.emailChangeHandler(event.target.value);
                      // }}
                      invalid={this.state.isEmailValid}
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                    <FormFeedback>Oh no! Email can not be null</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} lg={4}>
                  <FormGroup>
                    <Label for="location">Location</Label>
                    <Input
                      type="location"
                      name="location"
                      placeholder="Enter Your City where you live"
                      value={this.props.currentGuide.Location}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6} sm={12} lg={4}>
                  <FormGroup>
                    <Label for="Cost">Cost</Label>
                    <Input
                      type="Number"
                      placeholder="Enter Your Budget Here"
                      value={this.props.currentGuide.Cost}
                      // onChange={(event) =>
                      //   this.setState({ Cost: event.target.value })
                      // }
                    />
                  </FormGroup>
                </Col>
                {/* </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Days">Days</Label>
                      <Input
                        type="Number"
                        placeholder="Enter Number of Days You Prefer"
                        onChange={(event)=> this.setState({No_of_Days: event.target.value})}
                  
                      />
                    </FormGroup> */}

                <Col md={6} sm={12} lg={4}>
                  <FormGroup>
                    <Label for="Experience">Experience</Label>
                    <Input
                      type="Number"
                      placeholder="How many of years of experience You have?"
                      value={this.props.currentGuide.Experience}
                      // onChange={(event) =>
                      //   this.setState({ Experience: event.target.value })
                      // }
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/*                
                <CardTitle tag="h3">Select Payment Method</CardTitle>
                <Row
                  form
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: 50,
                  }}
                >
                  <Col md={6} sm={12} lg={3}>
                    <FormGroup style={{ flexDirection: "column" }}>
                      <Input
                        onChange={(event) => {
                          this.setState({
                            selectedPaymentMethod: event.target.value,
                          });
                        }}
                        type="radio"
                        value="credit"
                        name="radio1"
                      />
                      <img
                        style={{ width: 100, right: 100 }}
                        src={require("../../Asserts/credit-card.png")}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={3}>
                    <FormGroup style={{ flexDirection: "column" }}>
                      <Input
                        value="paypal"
                        type="radio"
                        name="radio1"
                        onChange={(event) => {
                          this.setState({
                            selectedPaymentMethod: event.target.value,
                          });
                        }}
                      />
                      <img
                        style={{ width: 100, right: 100 }}
                        src={require("../../Asserts/paypal.png")}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                {this.state.selectedPaymentMethod == "credit" ? (
                  <Row form>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Credit">Card Number</Label>
                        <Input
                          type="Number"
                          placeholder="Enter Credit Card Number"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="CVC">CVC Number</Label>
                        <Input type="Number" placeholder="Enter CVC Number" />
                      </FormGroup>
                    </Col>
                  </Row>
                ) : null} */}
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" />
                <Label for="exampleCheck" check>
                  Agree to Terms and Conditions
                </Label>
              </FormGroup>

              <Button
                onClick={this.submitHandler}
                style={{
                  marginTop: 30,
                  alignSelf: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
                type="submit"
              >
                Submit
              </Button>

              <StripeCheckout
                stripeKey="pk_test_51I7lIfBWL3moS0kP96i1xFyxRnCIjtZ5ONKm0kEo4GZp2K965RWgAbhPvquRSqvMRT1ARvU8lqgCcNJ90rhKb4F900EeWDT9Ry"
                token={(token) =>
                  this.handleToken(token, this.props.currentGuide.Cost * 100)
                }
                amount={this.props.currentGuide.Cost * 100}
                name={this.props.currentGuide.GuideName}
              />
            </CardBody>
          </Card>
        </Col>
        {/* </form> */}
      </div>
    );
  }
}

export default BookGuide;
