import {
  CssBaseline,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import ImageUploader from "react-images-upload";
import AppBarComponenet from "./AppBar";
import hotelCategoryService from "../../../services/HotelCategoryService";
import Map from "./Map";
import { toast } from "react-toastify";

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
const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: "",
      Role: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ Name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ Email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ Password: event.target.value });
  }

  handleRoleChange = async (event) => {
    this.setState({ Role: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.Name);
    formData.append("email", this.state.Email);
    formData.append("password", this.state.Password);
    formData.append("role", this.state.Role);

    console.log(this.state);
    console.log(formData);
    const data = this.state;
    userService
      .register(formData)
      .then((response) => {
        alert(response);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  }
  onMarkerDragEnd = (event) => {
    this.setState({ lat: event.latLng.lat() });
    this.setState({ lng: event.latLng.lng() });
    // console.log(event.latLng.lat());
    // console.log(event.latLng.lng());
  };
  // onMarkerDragEnd() {
  //   console.log("xjz");
  // }
  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "240px" }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Form to Add Hotel</CardHeader>
            <CardBody>
              <Form>
                <CardTitle tag="h3">Details About Hotel</CardTitle>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="Place">Select Hotel Category</Label>

                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.SelectedCategory}
                        onChange={this.change}
                        fullWidth
                      >
                        {this.state.Categories.map((Category, index) => (
                          <MenuItem value={Category._id}>
                            {Category.CategoryName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormGroup>
                  </Col>

                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Hotel Name</Label>
                      <Input
                        type="text"
                        name="Hotel_Name"
                        id="exampleDate"
                        placeholder="Enter Hotel Name"
                        value={this.state.HotelName}
                        onChange={this.handleHotelNameChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Location</Label>
                      <Input
                        type="text"
                        name="Location"
                        id="exampleDate"
                        placeholder="Enter Location"
                        value={this.state.Location}
                        onChange={this.handleLocationChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Contact Number</Label>
                      <Input
                        type="text"
                        name="Contact_No"
                        id="exampleDate"
                        placeholder="Enter Hotel Name"
                        value={this.state.Contactno}
                        onChange={this.handleContactnoChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Address</Label>
                      <Input
                        type="text"
                        name="Address"
                        id="exampleDate"
                        placeholder="Enter Address"
                        value={this.state.Address}
                        onChange={this.handleAddressChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Website</Label>
                      <Input
                        type="text"
                        name="Website"
                        id="exampleDate"
                        placeholder="Enter Website link"
                        value={this.state.Website}
                        onChange={this.handleWebsiteChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Facilities to be Provided</Label>
                      <Input
                        type="text"
                        name="Facilities"
                        id="exampleDate"
                        placeholder="Enter Facilities of Hotel"
                        value={this.state.Facilities}
                        onChange={this.handleFacilitiesChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Availability Status</Label>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.Status}
                        onChange={this.handleStatusChange}
                        fullWidth
                      >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                      </Select>
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  {/* <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="exampleDate">Availability Status</Label>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.Status}
                        onChange={this.handleStatusChange}
                        fullWidth
                      >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                      </Select>
                    </FormGroup>
                  </Col> */}
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="exampleDate">Add Image</Label>
                      <Input type="file" name="file" onChange={this.onDrop} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="exampleDate">Pin your hotel in map </Label>
                      <Map onMarkerDrag={this.onMarkerDragEnd} />
                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  style={{
                    marginTop: 30,
                    alignSelf: "center",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Add Hotel
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>

        <CssBaseline />
      </div>
    );
  }
}

export default addUser;
