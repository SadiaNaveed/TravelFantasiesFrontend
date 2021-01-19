import React, { Component } from "react";
import Axios from "axios";
import userService from '../../services/UserService'
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
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
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class BookPackages extends Component {
 
//  (props){
//      super(props);
//     //  this.state = {    
//     //     PackageName: "",
//     //     Booking_Date:" ",
//     //     Arrival_Time: "",
//     //     Departure_Time: "",
//     //     Start_Date: "",
//     //     End_Date: "",
//     //     No_of_Days:0,
//     //     Cost: 0,
//     //     Discount:0,
//     //     Meal: "",
//     //     Hotel: "",
//     //     Location: " ",
//     //     Persons: 0,
//     //     selectedPaymentMethod: null,
//     //     Host_Id:"",
   
//     //   };
// }





handleToken=(token, price)=>
    {
      let product= {
        name:this.props.currentPackage.PackageName, 
        price:price 
      }
      console.log(product)
      Axios.post("http://localhost:4000/api/BookPackages/checkout",
     { token, product}
    )
    .then(res =>{
      console.log('---client----',res.data)
      if(res.data.status=== 'success'){
          alert('Successfully booked')
      }
    })
    .catch(err=>{
      console.log(err)
    })  
  
    }


submitHandler =(event) =>{
       event.preventDefault();
      //  const{stripe,elements}=this.props;
      //  if(!stripe||!elements)return;
      // const card= elements.getElement(caedElement); 
     console.log(this.state)
     console.log(userService.getLoggedInUser()._id)
    Axios.post("http://localhost:4000/api/BookPackages",
    {
      PackageName:  this.state.PackageName,
      Booking_Date:  this.state.Booking_Date,
      Arrival_Time:  this.state.Arrival_Time,
      Departure_Time:  this.state.Departure_Time,
      Start_Date:  this.state.Start_Date,
      End_Date:  this.state.End_Date,
      No_of_Days:  this.state.No_of_Days,
      Cost:  this.state.Cost, 
      Discount: this.state.Discount,
      Persons:  this.state.Persons,
      Meal:  this.state.Meal,
      Hotel:  this.state.Hotel,
      Location:  this.state.Location,
      Host_Id: userService.getLoggedInUser()._id,
      

    })
    .then(res =>{
      console.log('---client----',res.data)
      if(res.status=== 200){
          alert('Success')
      }
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

  render() 
  
  {
      console.log(this.props.currentPackage)
    return (
      <div style={{ marginTop: 50 }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Tour Booking Form To Continue</CardHeader>
            <CardBody>
              <div>
                <CardTitle tag="h3">Details About Tour Packages</CardTitle>
                
                <Row form>
                    <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                  <Label for="Place">Package-Name</Label>
                  <Input
                    type="text"
                    name="place"
                    value={this.props.currentPackage.PackageName}
                    //onChange={(event)=> this.setState({PackageName: event.target.value})}
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
                      <Label for="location">Location</Label>
                      <Input
                      value={this.props.currentPackage.Location}
                        // type="text"
                        // placeholder="Enter Your location Here"
                        // onChange={(event)=> this.setState({Location: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="meal">Meal</Label>
                      <Input
                      value={this.props.currentPackage.Meal}
                        // type="text"
                        // placeholder="Enter meal per day"
                        // onChange={(event)=> this.setState({Meal: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Hotel">Hotel</Label>
                      <Input
                      value={this.props.currentPackage.Hotel}
                        // type="text"
                        // placeholder="hotel available?"
                        // onChange={(event)=> this.setState({Hotel: event.target.value})}
                  
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
                        //placeholder="Enter Your Budget Here"
                        value={this.props.currentPackage.Cost}
                        //onChange={(event)=> this.setState({Cost: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>

                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Discount">Discount</Label>
                      <Input
                        //type="Number"
                        //placeholder="Enter Your Budget Here"
                        value={this.props.currentPackage.Discount}
                        //onChange={(event)=> this.setState({Discount: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>



                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Days">Days</Label>
                      <Input
                        //type="Number"
                        //placeholder="Enter Number of Days You Prefer"
                        value={this.props.currentPackage.Days}
                        //onChange={(event)=> this.setState({No_of_Days: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Persons">Persons</Label>
                      <Input
                      value={this.props.currentPackage.AllowedPersons}
                        // type="Number"
                        // placeholder="How many of You will be there?"
                        // onChange={(event)=> this.setState({Persons: event.target.value})}
                  
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
                ) : null}
                <FormGroup check>
                  <Input type="checkbox" name="check" id="exampleCheck" />
                  <Label for="exampleCheck" check>
                    Agree to Terms and Conditions
                  </Label>
                </FormGroup> */}
                <StripeCheckout
                    stripeKey="pk_test_51I7lIfBWL3moS0kP96i1xFyxRnCIjtZ5ONKm0kEo4GZp2K965RWgAbhPvquRSqvMRT1ARvU8lqgCcNJ90rhKb4F900EeWDT9Ry"
                    token={(token)=>this.handleToken(token,this.props.currentPackage.Cost-(this.props.currentPackage.Cost*this.props.currentPackage.Discount)/100)}
                    amount={this.props.currentPackage.Cost-(this.props.currentPackage.Cost*this.props.currentPackage.Discount)/100}
                    name={this.props.currentPackage.PackageName}
                    
                />
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
              </div>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default BookPackages;
