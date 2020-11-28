import React, { Component } from "react";
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
            <CardHeader>Please Fill Out Details To Continue</CardHeader>
            <CardBody>
              <CardTitle tag="h3">Personal Details</CardTitle>
              <Form>
                <Row form>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input placeholder="Enter Your Full Name" />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Email">Email</Label>
                      <Input
                        onChange={(event) => {
                          this.emailChangeHandler(event.target.value);
                        }}
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
                      <Label for="Contact">Contact Number</Label>
                      <Input placeholder="Enter Your Contact Number Here" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleAddress2">Address</Label>
                  <Input
                    type="text"
                    name="address2"
                    id="exampleAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </FormGroup>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">City</Label>
                      <Input type="text" name="city" id="exampleCity" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">State</Label>
                      <Input type="text" name="state" id="exampleState" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">Zip</Label>
                      <Input type="text" name="zip" id="exampleZip" />
                    </FormGroup>
                  </Col>
                </Row>
                <CardTitle tag="h3">Details About Tour</CardTitle>
                <FormGroup>
                  <Label for="Place">Place</Label>
                  <Input
                    type="text"
                    name="place"
                    placeholder="Enter the Place You want to Visit"
                  />
                </FormGroup>
                <Row form>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Cost">Cost</Label>
                      <Input
                        type="Number"
                        placeholder="Enter Your Budget Here"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Days">Days</Label>
                      <Input
                        type="Number"
                        placeholder="Enter Number of Days You Prefer"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Persons">Persons</Label>
                      <Input
                        type="Number"
                        placeholder="How many of You will be there?"
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
