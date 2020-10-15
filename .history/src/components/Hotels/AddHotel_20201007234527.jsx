import { makeStyles, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../services/HotelService";
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
      Image: " ",
      Address: " ",
      Contactno: " ",
      CheckIn: " ",
      CheckOut: " ",
      Website: " ",
      Facilities: " ",
      Availablity: " ",
      Ratings: " ",
    };
    this.handleHotelNameChange = this.handleHotelNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleContactnoChange = this.handleContactnoChange.bind(this);
    this.handleCheckInChange = this.handleCheckInChange.bind(this);
    this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    this.handleFacilitiesChange = this.handleFacilitiesChange.bind(this);
    this.handleAvailablityChange = this.handleAvailablityChange.bind(this);
    this.handleRatingsChange = this.handleRatingsChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleAvailablityChange(event) {
    this.setState({ Availablity: event.target.value });
  }
  handleRatingsChange(event) {
    this.setState({ Ratings: event.target.value });
  }
  handleImageChange(event) {
    // this.setState({ file: event.target.files[0] });
    this.setState({ Image: event.target.value });
  }
  handleSubmit(event) {
    // alert("An essay was submitted: " + this.state.HotelName + this.state.Email);
    event.preventDefault();
    //const Data = new FormData();
    //formData.append("Images", this.state.file);
    const Data = {
      body: {
        HotelName,
        Location,
        Image,
        Address,
        Contactno,
        CheckIn,
        CheckOut,
        Website,
        Facilities,
        Availablity,
        Ratings,
      },
    };
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    hotelService
      .addHotel("/", Data, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <h1 style={{ position: "relative", textAlign: "center", fontSize: 50 }}>
          Add New Hotel
        </h1>
        <form
          style={{
            //   marginLeft: "30px",
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
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Start Date:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Check_in_time"
                    fullWidth
                    value={this.state.CheckIn}
                    onChange={this.handleCheckInChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>End Date:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Check_out_time"
                    fullWidth
                    value={this.state.CheckOut}
                    onChange={this.handleCheckOutChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Availability Status:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Availability_status"
                    fullWidth
                    value={this.state.Availablity}
                    onChange={this.handleAvailablityChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Ovreall Ratings:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Overall_Rating"
                    value={this.state.Ratings}
                    onChange={this.handleRatingsChange}
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
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Images"
                    fullWidth
                    value={this.state.Image}
                    onChange={this.handleImageChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            {/* <Grid>
              <input
                type="file"
                name="myImage"
                onChange={this.handleImageChange}
              />
            </Grid> */}
          </Grid>
          <button
            type="submit"
            value="Submit"
            variant="contained"
            color="blue"
            onClick={this.handleSubmit}
          >
            {" "}
            Add new Hotel{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default addHotel;
