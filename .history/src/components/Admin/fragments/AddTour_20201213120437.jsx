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
  import tourService from "../../../services/TourService";
  import ImageUploader from "react-images-upload";
  import AppBarComponenet from "./AppBar";
  import tourCategoryService from "../../../services/TourCategoryService";
  import Map from "./Map";
  const useStyles = makeStyles((theme) => ({
    name: {
      fontSize: 130,
      backgroundColor: "white",
    },
  }));

  
  class AddTour extends Component {
    constructor(props) {
      super(props);
      this.state = {
        PlaceName: " ",
        Location: " ",
        Arival_Date: "",
        Arival_Time: " ",
        Departure_Date: "",
        Departure_Time: " ",
        no_of_days: 0,
        Total_Seats: 0,
        Facilities: " ",
        Status: "Yes",
        Cost: 0,
        ImageName: " ",
        selectedFile: [],
        Categories: [],
        SelectedCategory: 0,
      };
      this.onDrop = this.onDrop.bind(this);
      this.handlePlaceNameChange = this.handlePlaceNameChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handlArival_DateChange = this.handleArival_DateChange.bind(this);
      this.handleArival_TimeChange = this.handleArival_TimeChange.bind(this);
      this.handleDeparture_DateChange = this.handleDeparture_DateChange.bind(this);
      this.handleDeparture_TimeChange = this.handleDeparture_TimeChange.bind(this);
      this.handleno_of_daysChange = this.handleno_of_daysChange.bind(this);
      this.handleTotal_SeatsChange = this.handleTotal_SeatsChange.bind(this);
      this.handleFacilitiesChange = this.handleFacilitiesChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleCostChange = this.handleCostChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.change = this.change.bind(this);
      this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
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
    }
    handlePlaceNameChange(event) {
      this.setState({ PlaceName: event.target.value });
    }
    handleLocationChange(event) {
      this.setState({ Location: event.target.value });
    }
    handleArival_DateChange(event) {
      this.setState({ Arival_Date: event.target.value });
    }
    handleArival_TimeChange(event) {
      this.setState({ Arival_Time: event.target.value });
    }
    handleDeparture_DateChange(event) {
      this.setState({ Departure_Date: event.target.value });
    }
    handleDeparture_TimeChange(event) {
      this.setState({ Departure_Time: event.target.value });
    }
    handleno_of_daysChange(event) {
      this.setState({ no_of_days: event.target.value });
    }
    handleTotal_SeatsChange(event) {
      this.setState({ Total_Seats: event.target.value });
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
      formData.append("PlaceName", this.state.HotelName);
      formData.append("Location", this.state.Location);
      formData.append("Arival_Date", this.state.Arival_Date);
      formData.append("Arival_Time", this.state.Arival_Time);
      formData.append("Departure_Date", this.state.Departure_Date);
      formData.append("Departure_Time", this.state.Departure_Time);
      formData.append("no_of_days", this.state.no_of_days);
      formData.append("Total_Seats", this.state.Total_Seats);
      formData.append("Status", this.state.Status);
      formData.append("Cost", this.state.Cost);
      formData.append("Facilities", this.state.Facilities);
      formData.append("Category", this.state.SelectedCategory);
      for (var x = 0; x < this.state.selectedFile.length; x++) {
        formData.append("file", this.state.selectedFile[x]);
      }
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
    onMarkerDragEnd(event) {
      console.log("ji");
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
    }
    render() {
      return (
       
        <div style={{marginLeft:"250px", marginTop:"120px"}}>
          <CssBaseline />
          <AppBarComponenet />
          <h1 style={{ position: "relative", textAlign: "center", fontSize: 50 }}>
            Add New Tour
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
                <h3>Select Tour Category</h3>
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
                      <h3>Place Name:</h3>
                    </label>
                  </div>
                  <div class="col-sm">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      name="Place_Name"
                      fullWidth
                      value={this.state.PlaceName}
                      onChange={this.handlePlaceNameChange}
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
                      <h3> Arival_Date:</h3>
                    </label>
                  </div>
                  <div class="col-sm">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      name="Arival_Date"
                      value={this.state.Arival_Date}
                      onChange={this.handleArival_DateChange}
                    />
                  </div>
                </div>
              </Grid>

              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <div class="row">
                  <div class="col-sm">
                    <label>
                      <h3> Arival_Time:</h3>
                    </label>
                  </div>
                  <div class="col-sm">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      name="Arival_Time"
                      value={this.state.Arival_Time}
                      onChange={this.handleArival_TimeChange}
                    />
                  </div>
                </div>
              </Grid>


              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <div class="row">
                  <div class="col-sm">
                    <label>
                      <h3> Departure_Date:</h3>
                    </label>
                  </div>
                  <div class="col-sm">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      name="Departure_Date"
                      value={this.state.Departure_Date}
                      onChange={this.handleDeparture_DateChange}
                    />
                  </div>
                </div>
              </Grid>


              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <div class="row">
                  <div class="col-sm">
                    <label>
                      <h3> Departure_Time:</h3>
                    </label>
                  </div>
                  <div class="col-sm">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      name="Departure_Time"
                      value={this.state.Departure_Time}
                      onChange={this.handleDeparture_TimeChange}
                    />
                  </div>
                </div>
              </Grid>


              

              <Grid item xs={1}></Grid>
  
              <Grid item xs={5}>
                <div class="row">
                  <div class="col-sm">
                    <label>
                      <h3>no_of_days: </h3>
                    </label>
                  </div>
                  <div class="col-sm">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      name="no_of_days"
                      value={this.state.no_of_days}
                      onChange={this.handleno_of_daysChange}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={1}></Grid>
  
              <Grid item xs={5}>
                <div class="row">
                  <div class="col-sm">
                    <label>
                      <h3>Total_Seats:</h3>
                    </label>
                  </div>
                  <div class="col-sm">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      name="Total_Seats"
                      fullWidth
                      value={this.state.Total_Seats}
                      onChange={this.handleTotal_SeatsChange}
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
              Add new Tour{" "}
            </button>
          </form>
          <Map onMarkerDrag={this.onMarkerDragEnd} />
        </div>
      );
    }
  }
  
  export default AddTour;



  