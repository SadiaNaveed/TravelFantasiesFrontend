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
import { Col, Form } from "reactstrap";
import { Button } from "bootstrap";
const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class addHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HotelName: " ",
      Location: " ",
      selectedFile: [],
      Address: " ",
      Contactno: " ",
      Website: " ",
      Facilities: " ",
      Status: "Yes",
      Cost: 0,
      lat: 0,
      lng: 0,
      ImageName: " ",
      Categories: [],
      SelectedCategory: 0,
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleHotelNameChange = this.handleHotelNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleContactnoChange = this.handleContactnoChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    this.handleFacilitiesChange = this.handleFacilitiesChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
    this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
  }
  componentDidMount() {
    hotelCategoryService
      .getHotelCategory(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Categories: data });
        console.log(this.state.Categories);
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleHotelNameChange(event) {
    this.setState({ HotelName: event.target.value });
  }
  handleLocationChange(event) {
    this.setState({ Location: event.target.value });
  }
  handleAddressChange(event) {
    this.setState({ Address: event.target.value });
  }
  handleContactnoChange(event) {
    this.setState({ Contactno: event.target.value });
  }
  handleCheckInChange(event) {
    this.setState({ CheckIn: event.target.value });
  }
  handleCheckOutChange(event) {
    this.setState({ CheckOut: event.target.value });
  }

  handleWebsiteChange(event) {
    this.setState({ Website: event.target.value });
  }
  handleFacilitiesChange(event) {
    this.setState({ Facilities: event.target.value });
  }
  handleStatusChange(event) {
    this.setState({ Status: event.target.value });
  }
  handleCostChange(event) {
    this.setState({ Cost: event.target.value });
  }

  onDrop(event) {
    this.setState({
      selectedFile: event.target.files,
    });
  }
  change = async (event) => {
    this.setState({ SelectedCategory: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("HotelName", this.state.HotelName);
    formData.append("Location", this.state.Location);
    formData.append("Address", this.state.Address);
    formData.append("Contactno", this.state.Contactno);
    formData.append("Status", this.state.Status);
    formData.append("Cost", this.state.Cost);
    formData.append("Website", this.state.Website);
    formData.append("Facilities", this.state.Facilities);
    formData.append("Category", this.state.SelectedCategory);
    formData.append("Latitude", this.state.lat);
    formData.append("Longitude", this.state.lng);
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      formData.append("file", this.state.selectedFile[x]);
    }
    console.log(this.state);
    console.log(formData);
    const data = this.state;
    hotelService
      .addHotel(formData)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
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
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <div style={{ marginTop: "70px" }}>
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

                        {this.state.Categories.map((Category, index) => (
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.SelectedCategory}
                            onChange={this.change}
                            fullWidth
                          >
                            <MenuItem value={Category._id}>
                              {Category.CategoryName}
                            </MenuItem>
                          </Select>
                        ))}
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
                          {this.state.guest == 1 && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.rooms}
                              onChange={this.handleRoomChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                            </Select>
                          )}
                          {this.state.guest == 2 && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.rooms}
                              onChange={this.handleRoomChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                            </Select>
                          )}
                          {this.state.guest == 3 && (
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
                            </Select>
                          )}
                          {this.state.guest == 4 && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.rooms}
                              onChange={this.handleRoomChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={1}>2</MenuItem>
                              <MenuItem value={1}>3</MenuItem>
                              <MenuItem value={1}>4</MenuItem>
                            </Select>
                          )}
                          {this.state.guest == 5 && (
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.rooms}
                              onChange={this.handleRoomChange}
                              fullWidth
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={1}>2</MenuItem>
                              <MenuItem value={1}>3</MenuItem>
                              <MenuItem value={1}>4</MenuItem>
                              <MenuItem value={1}>5</MenuItem>
                            </Select>
                          )}
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
                            this.setState({ Start_Date: event.target.value })
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
                        <Label for="Cost">Cost (One Room Per Night)</Label>
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
                    onClick={this.handleSubmit}
                  >
                    Proceed To Checkout
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </div>
        <CssBaseline />
        <h1 style={{ position: "relative", textAlign: "center", fontSize: 50 }}>
          Add New Hotel
        </h1>
        <form
          onSubmit={this.handleSubmit}
          enctype="multipart/form-data"
          style={{
            marginBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "300px",
            borderColor: "black",
            borderRadius: "30px",
            borderStyle: "bold",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <h3>Select Hotel Category</h3>
              <select
                onChange={this.change}
                value={this.state.SelectedCategory}
              >
                {this.state.Categories.map((Category, index) => (
                  <option key={Category._id} value={Category._id}>
                    {" "}
                    {Category.CategoryName}{" "}
                  </option>
                ))}
              </select>
            </Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Hotel Name:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Hotel_Name"
                    fullWidth
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <label>
                      <h3>Location:</h3>
                    </label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      name="Location"
                      fullWidth
                      value={this.state.Location}
                      onChange={this.handleLocationChange}
                    />
                  </label>
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3> Contact Number:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    name="Contact_No"
                    value={this.state.Contactno}
                    onChange={this.handleContactnoChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Address: </h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    name="Address"
                    value={this.state.Address}
                    onChange={this.handleAddressChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Website:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Website"
                    fullWidth
                    value={this.state.Website}
                    onChange={this.handleWebsiteChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Facilities to be Provided:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    name="Facilities"
                    rows={4}
                    cols={3}
                    // defaultValue="Default Value"
                    variant="outlined"
                    value={this.state.Facilities}
                    onChange={this.handleFacilitiesChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              {/* //className={classes.formControl} */}
              <FormControl variant="outlined" fullWidth>
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
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
              {/* <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Status_status"
                    fullWidth
                    value={this.state.Status}
                    onChange={this.handleStatusChange}
                  /> */}
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Cost:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Overall_Rating"
                    value={this.state.Ratings}
                    onChange={this.handleCostChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3> Images:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <input
                    type="file"
                    name="file"
                    multiple
                    onChange={this.onDrop}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <button
            variant="contained"
            style={{
              color: "blue",
              position: "absolute",
              left: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            Add new Hotel{" "}
          </button>
        </form>

        <Map onMarkerDrag={this.onMarkerDragEnd} />
      </div>
    );
  }
}

export default addHotel;
