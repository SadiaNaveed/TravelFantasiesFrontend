import React, { Component } from "react";
import {
  CssBaseline,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Axios from "axios";

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
import Grid from "@material-ui/core/Grid";
import packagesService from "../../../services/PackagesService";
import ImageUploader from "react-images-upload";
import AppBarComponenet from "./AppBar";
import hotelCategoryService from "../../../services/HotelCategoryService";
import Map from "./Map";
const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class addPackages extends Component {
  constructor(props) {
    super(props);
    console.log("----packages---");
    this.state = {
      PackageName: "",
      PlaceName: "",
      Cost: "",
      Discount: "",
      Description: "",
      Detail: "",
      Meal: "",
      Hotel: "",
      no_of_days: "",
      AllowedPersons: "",
      Location: " ",
      Status: true,
      selectedFile: [],
      ImageName: " ",
    };
    this.onDrop = this.onDrop.bind(this);
    this.handlePackageNameChange = this.handlePackageNameChange.bind(this);
    this.handlePlaceNameChange = this.handlePlaceNameChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleDiscountChange = this.handleDiscountChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
    this.handleMealChange = this.handleMealChange.bind(this);
    this.handleHotelChange = this.handleHotelChange.bind(this);
    this.handleno_of_daysChange = this.handleno_of_daysChange.bind(this);
    this.handleAllowedPersonsChange = this.handleAllowedPersonsChange.bind(
      this
    );
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.change = this.change.bind(this);
    // this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
  }

  handlePackageNameChange(event) {
    this.setState({ PackageName: event.target.value });
  }
  handlePlaceNameChange(event) {
    this.setState({ PlaceName: event.target.value });
  }
  handleCostChange(event) {
    this.setState({ Cost: event.target.value });
  }
  handleDiscountChange(event) {
    this.setState({ Discount: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
  }
  handleDetailChange(event) {
    this.setState({ Detail: event.target.value });
  }
  handleMealChange(event) {
    this.setState({ Meal: event.target.value });
  }
  handleHotelChange(event) {
    this.setState({ Hotel: event.target.value });
  }
  handleno_of_daysChange(event) {
    this.setState({ no_of_days: event.target.value });
  }
  handleAllowedPersonsChange(event) {
    this.setState({ AllowedPersons: event.target.value });
  }
  handleLocationChange(event) {
    this.setState({ Location: event.target.value });
  }

  handleStatusChange(event) {
    this.setState({ Status: event.target.value });
  }

  onDrop(event) {
    this.setState({
      selectedFile: event.target.files,
    });
  }

  handleSubmit(event) {
    const {
      PackageName,
      PlaceName,
      Cost,
      Description,
      Detail,
      Meal,
      Hotel,
      no_of_days,
      Location,
      Status,
      AllowedPersons,
      Discount,
      selectedFile,
    } = this.state;
    event.preventDefault();
    var form = document.getElementById("form");
    var formData = new FormData(form);
    if (
      Hotel === "" ||
      Detail === "" ||
      Cost === "" ||
      Description === "" ||
      Meal === "" ||
      no_of_days === "" ||
      PackageName === "" ||
      PlaceName === "" ||
      Location === "" ||
      AllowedPersons === "" ||
      Discount === "" ||
      Status === "" ||
      selectedFile.length === 0
    ) {
      alert("Required to fill all fields");
    } else {
      formData.append("PackageName", this.state.PackageName);
      formData.append("PlaceName", this.state.PlaceName);
      formData.append("Cost", this.state.Cost);
      formData.append("Discount", this.state.Discount);
      formData.append("Description", this.state.Description);
      formData.append("Detail", this.state.Detail);
      formData.append("Meal", this.state.Meal);
      formData.append("Hotel", this.state.Hotel);
      formData.append("no_of_days", this.state.no_of_days);
      formData.append("AllowedPerson", this.state.AllowedPerson);
      formData.append("Location", this.state.Location);
      formData.append("Status", this.state.Status);

      for (var x = 0; x < this.state.selectedFile.length; x++) {
        formData.append("photos", this.state.selectedFile[x]);
      }
      packagesService
        .addPackages(formData)
        .then((response) => {
          alert("Successfully created!");
        })
        .catch((error) => {
          console.log("----ERRORR---", error);
        });
    }
  }
  // onMarkerDragEnd = (event) => {
  // this.setState({ lat: event.latLng.lat() });
  // this.setState({ lng: event.latLng.lng() });
  // console.log(event.latLng.lat());
  // console.log(event.latLng.lng());
  // };
  // onMarkerDragEnd() {
  //   console.log("xjz");
  // }
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <form
          id="form"
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
          style={{
            marginBottom: "50px",
            paddingLeft: "300px",
            paddingRight: "300px",
            borderColor: "black",
            borderRadius: "30px",
            borderStyle: "bold",
          }}
        >
          <Col sm="12">
            <Card>
              <CardHeader>Add new tour Packages</CardHeader>
              <CardBody>
                <CardTitle tag="h3">Packags Details</CardTitle>
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="Place">PackageName</Label>
                        <Input
                          type="text"
                          name="packageName"
                          placeholder="Enter the Package name "
                          value={this.state.PackageName}
                          onChange={this.handlePackageNameChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <InputLabel id="demo-simple-select-outlined-label">
                          Availability Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={this.state.Status}
                          onChange={this.handleStatusChange}
                          label="Age"
                          fullWidth
                        >
                          <MenuItem value="">
                            <em>Select</em>
                          </MenuItem>
                          <MenuItem value={true}>Yes</MenuItem>
                          <MenuItem value={false}>No</MenuItem>
                        </Select>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Place Name">Place Name</Label>
                        <Input
                          type="name"
                          placeholder="Enter Place Name"
                          value={this.state.PlaceName}
                          onChange={this.handlePlaceNameChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="location">Location</Label>
                        <Input
                          type="location"
                          placeholder="Enter location"
                          value={this.state.Location}
                          onChange={this.handleLocationChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="hotel">Hotel</Label>
                        <Input
                          type="hotel"
                          placeholder="Enter hotel"
                          value={this.state.Hotel}
                          onChange={this.handleHotelChange}
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
                          value={this.state.Cost}
                          onChange={this.handleCostChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Discount">Discount</Label>
                        <Input
                          type="Number"
                          placeholder="Enter Your Budget Here"
                          value={this.state.Discount}
                          onChange={this.handleDiscountChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Days">Days</Label>
                        <Input
                          type="Number"
                          placeholder="Enter Number of Days You Prefer"
                          value={this.state.no_of_days}
                          onChange={this.handleno_of_daysChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Persons">Persons</Label>
                        <Input
                          type="Number"
                          placeholder="How many of You will be there?"
                          value={this.state.AllowedPersons}
                          onChange={this.handleAllowedPersonsChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} lg={4}>
                      <FormGroup>
                        <Label for="Meal">Meal</Label>
                        <Input
                          type="meal"
                          placeholder="Meal"
                          value={this.state.Meal}
                          onChange={this.handleMealChange}
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
                      value={this.state.Description}
                      onChange={this.handleDescriptionChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Detail">Detail</Label>
                    <Input
                      type="text"
                      name="Detail"
                      placeholder="Enter Detail"
                      value={this.state.Detail}
                      onChange={this.handleDetailChange}
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
                    //onClick={()=> this.submitHandler()}
                  >
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </form>
      </div>
    );
  }
}

export default addPackages;
