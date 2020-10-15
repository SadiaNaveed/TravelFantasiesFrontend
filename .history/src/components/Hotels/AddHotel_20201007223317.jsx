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
      Email: " ",
    };
    this.handleHotelNameChange = this.handleHotelNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHotelNameChange(event) {
    this.setState({ HotelName: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ Email: event.target.value });
  }
  handleImageChange(event) {
    this.setState({ file: event.target.files[0] });
  }
  handleSubmit(event) {
    // alert("An essay was submitted: " + this.state.HotelName + this.state.Email);
    event.preventDefault();
    const formData = new FormData();
    formData.append("Images", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    hotelService
      .addHotel("/", formData, config)
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
          onSubmit={this.handleSubmit}
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
          <Grid container spacing={3}>
            <Grid item xs={2}></Grid>
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
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
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
                      value={this.state.Email}
                      onChange={this.handleEmailChange}
                    />
                  </label>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              </Grid>
            <Grid item xs={6}>
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
                    name="Contact_No"
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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
                    name="Address"
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            {/* <Grid>
              <input
                type="file"
                name="myImage"
                onChange={this.handleImageChange}
              />
            </Grid> */}
          </Grid>
          <button type="submit" value="Submit" variant="contained" color="blue">
            {" "}
            Add new Hotel{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default addHotel;
