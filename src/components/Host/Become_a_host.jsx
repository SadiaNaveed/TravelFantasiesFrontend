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

   constructor(props) {
    super(props);
    this.state = {
    ImageName: " ",
    selectedPaymentMethod: null, 
    isEmailValid: false,
    email: "" ,
    Title: "",
    Tour_Type: " ",
    Location: "",
    Arrival_Time:"",
    Departure_Time:"",
    Start_Date: "",
    End_Date: "",
    Cost: 0,
    Description: "",
    no_of_days: 0,
    Total_Seats: 0,
    Available_Seats: 0,
    Host_Id:'',
    Status: false,
    Details: '',
    selectedFile: [],
    Categories: [],
    SelectedCategory: 0,
      
      
    };
    this.onDrop = this.onDrop.bind(this);
    
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

  //     Axios.get("http://localhost:4000/api/tours/unapproved")
  //  .then(res =>{
  //    console.log(res.data)
  //  })
  //  .catch(err=>{
  //    console.log(err)
  //  })  
  }
  
  onDrop(event) {
    this.setState({
      selectedFile: event.target.files,
    });
  }


  change = async (event) => {
    console.log(event.target.value)
    this.setState({ SelectedCategory: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Title", this.state.Title);
    formData.append("Location", this.state.Location);
    formData.append("Address", this.state.Address);
    formData.append("Description", this.state.Description);
    formData.append("Start_Date", this.state.Start_Date);
    formData.append("End_Date", this.state.End_Date);
    formData.append("Status", false);
    formData.append("Cost", this.state.Cost);
    formData.append("Arrival_Time", this.state.Arrival_Time);
    formData.append("Departure_Time", this.state.Departure_Time);
    formData.append("Total_Seats", this.state.Total_Seats);
    formData.append("no_of_days", this.state.no_of_days);
    formData.append("Tour_Type", this.state.SelectedCategory);
    formData.append("Category", this.state.SelectedCategory_id);
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      formData.append("file", this.state.selectedFile[x]); 
    }
    //console.log(this.state);
    console.log(formData);
    console.log(this.state);
    
    const data = this.state;
    //console.log(data);
    tourService
      .addTour(formData)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
                    <Col md={6} sm={12} lg={4}>
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
                <Label for="Images">Images</Label>
                  <Input
                    type="file"
                    name="file"
                    multiple
                    onChange={this.onDrop}
                  />
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
                  onClick={(event)=> this.handleSubmit(event)}
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

 {/*

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
               
                      */}