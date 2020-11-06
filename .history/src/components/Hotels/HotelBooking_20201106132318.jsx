import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { Component } from "react";
import queryString from 'query-string';  
import roomService from "../../services/RoomService";
import roomCategoryService from "../../services/RoomCategoryService";
import hotelService from "../../services/HotelService";
// import { KeyboardDatePicker } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
// import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import moment from "moment";




class HotelBooking extends Component{
  constructor(props) {
        super(props);
      this.state = {
          hotel: [],
        Image: "",
        Room: [],
        Category: [],
        guest: 0,
        startDate: new Date(),
        endDate: null,
        rooms: 0,
        errors:{},
        }
        //  this.onButtonClick = this.onButtonClick.bind(this);    
    this.handleChange = this.handleChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
   handleChange = (event) => {
     this.setState({ guest: event.target.value });
  };
  handleRoomChange = (event) => {
    this.setState({ rooms: event.target.value });
  }
  handleValidation(){
    let room = this.state.rooms;
    let guests = this.state.guest;
            //let errors = {};
            let formIsValid = true;

            //Name
            if(room==0){
               formIsValid = false;
              this.setState({ errors: ["Select Room"]  });
            }
      
            if( guests == 0){
              //  if(!fields["name"].match(/^[a-zA-Z]+$/)){
                  formIsValid = false;
                 this.setState({ errors: ["Select Guests"] });
               //}        
            }
       
           //this.setState({errors: errors});
           return formIsValid;
       }
  handleSubmit = (e) => {
                e.preventDefault();

    if (this.handleValidation()) {
      const hotelId = queryString.parse(this.props.history.location.search);
      const roomSearch = hotelId.room;
      console.log(roomSearch);
      const categorySearch = hotelId.Category;
      console.log(categorySearch);
      this.props.history.push({
        pathname: '/HotelBooking',
        search: '?Category=' + categorySearch + '&room=' + roomSearch + '&hotel=' + this.state.hotel.HotelId,
      });
    } else {
      console.log(this.state.errors);
      alert(this.state.errors);
    }
     
  }
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
   onDateChange = dates => {
    const [start, end] = dates;
     this.setState({ startDate: start });
     this.setState({ endDate: end });
     console.log(this.state.startDate);
     console.log(this.state.endDate);
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
 calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);

    return endDate.diff(startDate, "days");
  }
  
  render() {
  //  const { hotel, history } = props;
        const { startDate, endDate } = this.state;
    var total = 0;
        const daysLeft = this.calculateDaysLeft(startDate, endDate);
    total = this.state.rooms * daysLeft * this.state.Room.Cost;
    return (
    
      <div style={{marginTop:"100px" ,marginLeft:"100px" , marginBotton:"30px"}}>
        <h1>Booking Hotel</h1> 
        <form>
 
    
          </form>
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
                      {this.state.Category.CategoryName == "Single Room" &&
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={this.state.guest}
                          onChange={this.handleChange}
                          fullWidth
                        >
          
                          <MenuItem value={1}>1</MenuItem>
                    
                        </Select>
                      }
                       {this.state.Category.CategoryName == "King Double Room" &&
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
                      }
                       {this.state.Category.CategoryName == "Queen Double Room" &&
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
                      }
                       {this.state.Category.CategoryName == "Single Deluxe Room" &&
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
                      }

                      {this.state.Category.CategoryName == "Double Deluxe Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Double-Double (Twin Double) Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Twin Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Hollywood Twin Room" &&
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
                      }

                      {this.state.Category.CategoryName == "Duplex Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Cabana Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Studio Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Lanai Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Regular Suite Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Penthouse Suite Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Presidential Suite Room" &&
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
                      }
                      {this.state.Category.CategoryName == "Sico Room" &&
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
                      }
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
          value={this.state.rooms}
          onChange={this.handleRoomChange}
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
                    <h3>Check-in and Check-out date </h3>
                  </label>
<DatePicker
      selected={this.state.startDate}
      onChange={this.onDateChange}
      minDate={new Date()}
      startDate={this.state.startDate}
      endDate={this.state.endDate}
                    selectsRange
                    fullWidth
                    format={"dd-MM-yyyy"}
         // dropdownMode={'select'}
        isClearable={true}
      inline
                  />  
                 
                 
                </div>
              </div>
            </Grid>
            
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Cost Per Room/Night:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Hotel_Name"
                    fullWidth
                    value={this.state.Room.Cost}
                  //  onChange={this.handleHotelNameChange}
                     InputProps={{
            readOnly: true,
          }}
                  />
                </div>
              </div>               
               
            </Grid>
           
          </Grid>
          <hr></hr>
          <Grid container style={{backgroundColor:"#33ba95"}}>
            <Grid item xs={2}>
<h2>Cost per Night</h2>  
            </Grid>
            <Grid item xs={10}>
<h2>{this.state.Room.Cost}</h2>
            </Grid>
            <Grid item xs={2}>
<h2>No. of Days</h2>  
            </Grid>
            <Grid item xs={10}>
<h2>{daysLeft}</h2>
            </Grid>
            <Grid item xs={2}>
<h2>Number of Rooms</h2>  
            </Grid>
            <Grid item xs={10}>
              <h2>{this.state.rooms}</h2>
            </Grid>
             <Grid item xs={2}>
<h2>Total Calculated Cost</h2>  
            </Grid>
            <Grid item xs={10}>
<h2>{total}</h2>
            </Grid>
            </Grid>
            
          
        
          
          <button variant="contained" style={{ color: "blue", position: "absolute", left: "50%", justifyContent: "center", alignItems: "center" }}>
            Proceed to Payment
          </button>

        </form>



       
          </div>

  
  );
};
}

  
  

export default HotelBooking;