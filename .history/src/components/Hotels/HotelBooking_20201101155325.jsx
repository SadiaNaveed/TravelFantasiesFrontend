import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { Component } from "react";
import queryString from 'query-string';  

class HotelBooking extends Component{
  constructor(props) {
        super(props);
      this.state = {
          hotel: [],
          Image: " ",
        }
        //  this.onButtonClick = this.onButtonClick.bind(this);    
  }
  
  componentDidMount() {
     
     const hotelId = queryString.parse(this.props.history.location.search);
         const hotelSearch = hotelId.hotel;
    console.log(hotelSearch);
    const roomSearch = hotelId.room;
    console.log(roomSearch);
    //  this.props.history.push({
    //     pathname: '/HotelBooking',
    //    search: '?hotel=' + hotelSearch +'&room=' +this.props.room._id,
       
    //  })
     
    //  roomCategoryService
    //    .getSingleRoomCategory(this.props.room.Category)
    //    .then((data) => {
    //      this.setState({ Category: data });
    //      console.log(this.state.Category);
    //      // setTotal(data.total);
    //      // setPerPage(10);
    //    })
    //    .catch((err) => {
    //      console.log(err);
    //    });
   };

  
  render() {
  //  const { hotel, history } = props;
    return (
    
      <div style={{marginTop:"100px" ,marginLeft:"100px" , marginBotton:"30px"}}>
        <h1>Booking Hotel</h1> 

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
            {/* <select onChange={this.change} value={this.state.SelectedCategory}>
                {this.state.Categories.map((Category, index) => (
                     <option  key={Category._id} value={Category._id}> {Category.CategoryName} </option>
          
            ))}
            </select> */}
               <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
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
        <InputLabel id="demo-simple-select-outlined-label">Availability Status</InputLabel>
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
                  <input type="file" name="file" multiple onChange={this.onDrop} />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <button variant="contained" style={{color: "blue" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Hotel{" "}
          </button>
        </form>



       
          </div>

  
  );
};
}

  
  

export default HotelBooking;