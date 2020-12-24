import Axios from "axios";
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
//import Map from "./Map";
import tourCategoryService from "../../services/TourCategoryService";
import tourService from "../../services/TourService";
import userService from '../../services/UserService'

class BookTours extends Component {
  
  state = {
    
    selectedPaymentMethod: null, 
    isEmailValid: false,
    email: "" ,
    Title: "",
    Tour_Type: 0,
    Location: "",
    Start_Date: "",
    End_Date: "",
    Cost: 0,
    Description: "",
    no_of_days: 0,
    Total_Seats: 0,
    Available_Seats: 0,
    Images: "images",
    Host_Id:'',
    Status: false,
    Details: '',
    
    Categories: [],
    SelectedCategory: 0,

   };

   
   submitHandler(){
    console.log(this.state)
    console.log(userService.getLoggedInUser()._id)
   Axios.get("http://localhost:4000/api/tours/unapproved")
   .then(res =>{
     console.log(res.data)
   })
   .catch(err=>{
     console.log(err)
   })  
 }






   submitHandler(){
     console.log(this.state)
     console.log(userService.getLoggedInUser()._id)
    Axios.post("http://localhost:4000/api/tours",{
      Title:  this.state.Title ,
      Description:  this.state.Description,
      Images:  this.state.Images,
      Host_Id: userService.getLoggedInUser()._id,
      Start_Date:  this.state.Start_Date,
      End_Date:  this.state.End_Date,
      Status:  this.state.Status,
      Total_Seats:  this.state.Total_Seats,
      Available_Seats:  this.state.Available_Seats,
      Tour_Type:  this.state.SelectedCategory,
      Details:  this.state.Details,
      Cost:  this.state.Cost,
      no_of_days:  this.state.no_of_days,

    })
    .then(res =>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })  
  }

   componentDidMount() {
    tourCategoryService
      .getTourCategory(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Categories: data });
        console.log(this.state.Categories);
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });

      Axios.get("http://localhost:4000/api/tours/unapproved")
   .then(res =>{
     console.log(res.data)
   })
   .catch(err=>{
     console.log(err)
   })  
  }

  change = async (event) => {
    console.log(event.target.value)
    this.setState({ SelectedCategory: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Category", this.state.SelectedCategory);
    
    console.log(this.state);
    console.log(formData);
    const data = this.state;
    tourService
      .addTour(formData)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out Details To Continue</CardHeader>
            <CardBody>
              
              <CardTitle tag="h3">Tour Details</CardTitle>
              <Form>

              <Row form>
                  <Col md={6}>
               <FormGroup>
                  <Label for="Place">Place_Name</Label>
                  <Input
                    type="text"
                    name="place"
                    placeholder="Enter the Place You want to Visit"
                    onChange={(event)=> this.setState({Title: event.target.value})}
                  />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="Tour_Category">Tour_Category</Label>
                      <Input type="text" name="Tour_Category"/>
                      <select
                         onChange={this.change}
                         value={this.state.SelectedCategory}
                       >
                       {this.state.Categories.map((Category, index) => (
                       <option key={Category._id} value={Category._id}>
                        {" "}
                        {Category.Name}{" "}
                        </option>
                       ))}
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                
{/*
              <FormGroup>
                  <Label for="Place">Place</Label>
                  <Input
                    type="text"
                    name="place"
                    placeholder="Enter the Place You want to Visit"
                  />
                </FormGroup>
*/}

                <Row form>
                <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="location">Location</Label>
                      <Input
                        type="location"
                        placeholder="Enter location"
                        onChange={(event)=> this.setState({Location: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>

                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Credit">Arival_Date</Label>
                        <Input
                          type="5/11/2020"
                          placeholder="Enter Arival_Date"
                          onChange={(event)=> this.setState({Start_Date: event.target.value})}
                          />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="CVC">Departure_Date</Label>
                        <Input 
                        type="10/11/2020" 
                        placeholder="Enter Departure_Date" 
                        onChange={(event)=> this.setState({End_Date: event.target.value})}
                  
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
                        onChange={(event)=> this.setState({no_of_days: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="Persons">Persons</Label>
                      <Input
                        type="Number"
                        placeholder="How many of You will be there?"
                        onChange={(event)=> this.setState({Total_Seats: event.target.value})}
                  
                      />
                    </FormGroup>
                  </Col>
                </Row>


                  <FormGroup>
                  <Label for="Place">Description/Facilities</Label>
                  <Input
                    type="text"
                    name="place"
                    placeholder="Enter Detail"
                    onChange={(event)=> this.setState({Description: event.target.value})}
                  
                  />
                </FormGroup>
                {/*
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
                      */}
                <CardTitle tag="h3">Company-Detail (optional)</CardTitle>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">Company_Name</Label>
                      <Input type="text" name="Company_Name" id="exampleCity" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">Company_Email</Label>
                      <Input type="text" name="Company_Email" id="exampleState" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">Company_ContactNo</Label>
                      <Input type="text" name="zip" id="exampleZip" />
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
                  onClick={()=> this.submitHandler()}
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





//import React from "react";
//import { Grid, Button, TextField } from "@material-ui/core";
//import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles((theme) => ({
  //root: {
    //'& > *': {
      //margin: theme.spacing(10),
      //width: '50ch',
    //},
  //},
//}));

//const Become_a_host = (props) => {
  //console.log(props);

    //return ( 
      //  <Grid container spacing={3}>
        //  <Grid item xs={12}>
          //    <h1>Create a your tour</h1>
           //</Grid>
              
             // <Grid item xs={3}></Grid>

               // <Grid item xs={6}>
                // <TextField  label="Host_Name" fullWidth/>
                 //<TextField  label="Gender" fullWidth/>
                 //<TextField  label="Contact_No" fullWidth/>
                 //<TextField  label="Host_Email" fullWidth/>
                 //<TextField  label="Company_Name" fullWidth/>
                 //<TextField  label="Company_ContactNo" fullWidth/>
                 //<TextField  label="Place_Name"fullWidth />
                 //<TextField  label="Tour_Category"fullWidth />
                 //<TextField  label="Cost"fullWidth />
                 //<TextField  label="No_of_people"fullWidth />
                 //<TextField  label="No_of_days" fullWidth/>
                 //<TextField  label="Arival_location" fullWidth/>
                 //<TextField  label="Departure_location" fullWidth/>
                 //<TextField  label="Description/Facilities"fullWidth />
               //</Grid>

               

                 //   <Grid item xs={3}></Grid>
                   // <Grid item xs={3}></Grid>

                     //    <Grid item xs={6}>
                       //     <Button variant="contained" colour="primary">
                         //    Create Tour
                           // </Button>
                         //</Grid>
        
        //</Grid>
     //);
//}
 
//export default Become_a_host;