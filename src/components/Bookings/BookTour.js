import React, { Component } from "react";
import Axios from "axios";
import userService from '../../services/UserService'
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
class BookTours extends Component {
  state = {
    
    
     PlaceNmae: "",
     Booking_Date:" ",
     Arrival_Time: "",
     Departure_Time: "",
     Start_Date: "",
     End_Date: "",
     No_of_Days:0,
     Cost: 0,
     Persons: 0,
     selectedPaymentMethod: null,
     Host_Id:"",

   };
  


   submitHandler(){
     console.log(this.state)
     console.log(userService.getLoggedInUser()._id)
    Axios.post("http://localhost:4000/api/TourBookings",{
      PlaceName:  this.state.PlaceNmae ,
      Booking_Date:  this.state.Booking_Date,
      Arrival_Time:  this.state.Arrival_Time,
      Departure_Time:  this.state.Departure_Time,
      Start_Date:  this.state.Start_Date,
      End_Date:  this.state.End_Date,
      No_of_Days:  this.state.No_of_Days,
      Cost:  this.state.Cost, 
      Persons:  this.state.Persons,
      Status:  this.state.Status,
      Host_Id: userService.getLoggedInUser()._id,
      

    })
    .then(res =>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })  
  }


  emailChangeHandler(value)
   {
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
    return (
      <div style={{ marginTop: 50 }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Tour Booking Form To Continue</CardHeader>
            <CardBody>
              <Form>
                <CardTitle tag="h3">Details About Tour</CardTitle>
                
                <Row form>
                    <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                  <Label for="Place">Place_Name</Label>
                  <Input
                    type="text"
                    name="place"
                    placeholder="Enter the Place You want to Visit"
                    onChange={(event)=> this.setState({PlaceName: event.target.value})}
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
                  </Row>

                <Row form>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Cost">Cost</Label>
                      <Input
                        type="Number"
                        placeholder="Enter Your Budget Here"
                        onChange={(event)=> this.setState({Cost: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Days">Days</Label>
                      <Input
                        type="Number"
                        placeholder="Enter Number of Days You Prefer"
                        onChange={(event)=> this.setState({No_of_Days: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Persons">Persons</Label>
                      <Input
                        type="Number"
                        placeholder="How many of You will be there?"
                        onChange={(event)=> this.setState({Persons: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                </Row>

               
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
                ) : null}
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
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default BookTours;
