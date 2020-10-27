import { FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import ImageUploader from 'react-images-upload';

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class AddHotelCategory extends Component {
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
      ImageName: " ",
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
     for(var x = 0; x<this.state.selectedFile.length; x++) {
       formData.append('file', this.state.selectedFile[x])
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

  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft:"300px"}}>
        <h1 style={{ position: "relative",marginLeft:"300px", fontSize: 50 }}>
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
          <Grid container>
            <Grid item xs={6}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Hotel Category Name:</h3>
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
                    <Grid item xs={8}></Grid>
            <Grid item xs={6}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Hotel Category Name:</h3>
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
           
          </Grid>
          <button variant="contained" style={{color: "blue" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Hotel{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default AddHotelCategory;
