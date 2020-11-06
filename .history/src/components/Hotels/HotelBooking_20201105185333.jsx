import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { Component } from "react";
import queryString from 'query-string';  
import roomService from "../../services/RoomService";
import roomCategoryService from "../../services/RoomCategoryService";
import hotelService from "../../services/HotelService";
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

class HotelBooking extends Component{
  constructor(props) {
        super(props);
      this.state = {
          hotel: [],
        Image: " ",
        Room: [],
        Category: [],
        guest: '',
        selectedInDate: new Date(),
                selectedOutDate: new Date(),
        dayCount: 0,
        }
        //  this.onButtonClick = this.onButtonClick.bind(this);    
    this.handleChange = this.handleChange.bind(this);
    this.handleInDateChange = this.handleInDateChange.bind(this);
        this.handleOutDateChange = this.handleOutDateChange.bind(this);

  }
   handleChange = (event) => {
     this.setState({ guest: event.target.value });
  };
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
  handleInDateChange = (date) => {
    this.setState({selectedInDate: date});
  };  
   handleOutDateChange = (date) => {
     this.setState({ selectedOutDate: date });
      console.log(this.state.selectedOutDate);
     console.log(Date.parse(this.state.selectedOutDate));
    {this.state.selectedOutDate < this.state.selectedInDate && alert("check-out must be more than check-in")}
// if( Date.parse(this.state.selectedOutDate)  < Date.parse(this.state.selectedInDate)){
//    alert("Check-out is lesser");
// }
     const start = new Date(this.state.selectedInDate) //clone
     const end = new Date(this.state.selectedInDate) 
      while (end >= start) {
        this.setState({ dayCount: this.state.dayCount+1 })
    start.setDate(start.getDate() + 1)
     }
     console.log(start);
     console.log(this.state.selectedOutDate);
     console.log(Date.parse(this.state.selectedOutDate));
  };  
  componentDidMount() {
     
     const hotelId = queryString.parse(this.props.history.location.search);
         const hotelSearch = hotelId.hotel;
    console.log(hotelSearch);
    const roomSearch = hotelId.room;
    console.log(roomSearch);
    const categorySearch = hotelId.Category;
    console.log(categorySearch);
    //  this.props.history.push({
    //     pathname: '/HotelBooking',
    //    search: '?hotel=' + hotelSearch +'&room=' +this.props.room._id,
       
    //  })
     hotelService
     .getSingleHotel(hotelSearch)
        .then((data) => {
            this.setState({ hotel: data });
            this.setState({
                Image: 'data:image/jpeg;base64,' + this.arrayBufferToBase64(this.state.hotel.Image.data.data)
            });
        })
        .catch((err) => {
          console.log(err);
        });
     
    
    roomService
       .getSingleRoom(roomSearch)
       .then((data) => {
         this.setState({ Room: data });
         console.log(this.state.Room);
         // setTotal(data.total);
         // setPerPage(10);
       })
       .catch((err) => {
         console.log(err);
       });
    
    // const categorySearch = this.state.Room.Category;
    // console.log(categorySearch); 
    
     roomCategoryService
       .getSingleRoomCategory(categorySearch)
       .then((data) => {
         this.setState({ Category: data });
         console.log(this.state.Category);
         // setTotal(data.total);
         // setPerPage(10);
       })
       .catch((err) => {
         console.log(err);
       });
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
            <h3>Hotel Name</h3>
            {/* <select onChange={this.change} value={this.state.SelectedCategory}>
                {this.state.Categories.map((Category, index) => (
                     <option  key={Category._id} value={Category._id}> {Category.CategoryName} </option>
          
            ))}
            </select> */}
             <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Hotel_Name"
                    fullWidth
                    value={this.state.hotel.HotelName}
                    onChange={this.handleHotelNameChange}
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
                    <h3>Room :</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Hotel_Name"
                    fullWidth
                    value={this.state.Category.CategoryName}
                    onChange={this.handleHotelNameChange}
                     InputProps={{
            readOnly: true,
          }}
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
                      <h3>No of Guests:</h3>
                    </label>
                    <FormControl variant="outlined" fullWidth >
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
        </Select>
      </FormControl>
                  </label>
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
<label>
                    <h3> No of Rooms:</h3>
                  </label>
                
                  
                  <FormControl variant="outlined" fullWidth >
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
        </Select>
                    </FormControl>
                      </label>
                </div>
                
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <label>
                    <h3>Check-in </h3>
                  </label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    

      <DateTimePicker
        value={this.state.selectedInDate}
        disablePast
        inputVariant="outlined"
        fullWidth
        onChange={this.handleInDateChange}
     //   label="Check-in"
        showTodayButton
      />
    </MuiPickersUtilsProvider>
                  </label>
                  
                </div>
              
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <label>
                    <h3>Check-out </h3>
                  </label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    

      <DateTimePicker
        value={this.state.selectedOutDate}
        disablePast
        inputVariant="outlined"
        fullWidth
        onChange={this.handleOutDateChange}
     //   label="Check-in"
        showTodayButton
      />
                    </MuiPickersUtilsProvider>
                
     
                  </label>
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