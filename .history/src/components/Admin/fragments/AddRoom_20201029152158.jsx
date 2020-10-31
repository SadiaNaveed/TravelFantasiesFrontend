import { Button, CssBaseline, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import ImageUploader from 'react-images-upload';
import hotelCategoryService from "../../../services/HotelCategoryService";
import roomCategoryService from "../../../services/RoomCategoryService";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import queryString from 'query-string';  
import AppBarComponenet from "./AppBar";


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

const ITEM_HEIGHT = 48;
// const [anchorEl, setAnchorEl] = React.useState(null);

class AddRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        CategoryName: " ",
        Description: " ",
        SelectedCategory: " ",
        hotel: [],
        Image: "",
        FreeWifi: false,
        Television: false,
        Shower: false,
        TeaMaker: false,
        AirConditioning: false,
        HairDryer: false,
        BathTub: false,
        Laundary: false,
        RoomFridge: false,
        InRoomIron: false,
        PremiumCoffee: false,
        RoomPurification: false,
    

        
//         options : [
//   'None',
//   'Atria',
//   'Callisto',
//   'Dione',
//   'Ganymede',
//   'Hangouts Call',
//   'Luna',
//   'Oberon',
//   'Phobos',
//   'Pyxis',
//   'Sedna',
//   'Titania',
//   'Triton',
//   'Umbriel',
//         ],
//         anchorEl: null,
//         value: "xyz",
        //open: "",
        Categories: [],
        checked: [],
        

      };
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.change = this.change.bind(this);
      this.handleChange = this.handleChange.bind(this);

  }
  handleCategoryNameChange(event) {
    this.setState({ value: event.target.value });
    }
    handleDescriptionChange(event) {
      this.setState({ Description: event.target.value });   
    }
    handleClick (event) {
        this.setState({ anchorEl: event.currentTarget });
                // this.setState({ value: event.target.value });

        console.log(this.state.anchorEl);
  };

   handleClose () {
       this.setState({ anchorEl: null });
       console.log(this.state.anchorEl);


    };
    handleChange(event) {
        let item = event.target.name;
       this.setState({...this.state, [event.target.name]: event.target.checked  });
        console.log(event.target.name);
        console.log(event.target.checked);
      
    };
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

      componentDidMount() {
    roomCategoryService
        .getRoomCategory(this.props.page, this.props.perPage)
        .then((data) => {
          this.setState({ Categories: data });
            console.log(this.state.Categories);
          // setTotal(data.total);
          // setPerPage(10);
        })
        .catch((err) => {
          console.log(err);
        });
         //const { handle } = this.props.history.hotel
         const hotelId = queryString.parse(this.props.history.location.search);
         const hotelSearch = hotelId.hotel;
         console.log( hotelSearch);
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
         
}
     change = async (event) => {
    // this.setState({ value: event.target.value });
         this.setState({         SelectedCategory : event.target.value });
      console.log(this.state.SelectedCategory);
    };

    
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    //   formData.append("CategoryName", this.state.CategoryName);
    //   formData.append("Description", this.state.Description);
    // console.log(formData.CategoryName);
    // console.log(formData.Description);
    // console.log(this.state);
    const data = this.state;
    console.log(data);
    roomCategoryService
      .addRoomCategory(data)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

    render() {
      
        return (
        
            <div style={{ marginTop: "100px", marginLeft: "30px", marginBottom: "100px" }}>
                  <CssBaseline />
      <AppBarComponenet />
        <h1 style={{ position: "relative",marginLeft:"200px", fontSize: 50 }}>
                Add Room in {this.state.hotel.HotelName}
        </h1>
                <img src={this.state.Image} fullWidth alt="hotel" /> 

             <h3>Select Room Category</h3>
            <select onChange={this.change} value={this.state.Category}>
                {this.state.Categories.map((Category, index) => (
                     <option  key={Category._id} value={Category._id}>{Category.CategoryName}</option>
          
            ))}
            </select>
      
     
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
                    <Grid item xs={8}></Grid>
            <Grid item xs={6}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Room Description:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Description"
                                    fullWidth
                                    multiline
                                    rowsMax="5"
                    value={this.state.Description}
                    onChange={this.handleDescriptionChange}
                  />
                </div>
              </div>
            </Grid> 
             <Grid item xs={8}></Grid>
            <Grid item xs={6}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Total Number of Rooms:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Description"
                                    fullWidth
                                    multiline
                                    rowsMax="5"
                    value={this.state.Description}
                    onChange={this.handleDescriptionChange}
                  />
                </div>
              </div>
            </Grid> 
                </Grid>
                  <Grid item xs={8}></Grid>
            <Grid item xs={6}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Cost (Per Day):</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Description"
                                    fullWidth
                                    multiline
                                    rowsMax="5"
                    value={this.state.Description}
                    onChange={this.handleDescriptionChange}
                  />
                </div>
              </div>
                </Grid> 
      <h3>Facilities of Room:</h3>
                      <FormGroup row>
      
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedA}
            onChange={this.handleChange}
            name="FreeWifi"
          />
        }
        label="Free Wifi"
                />
                  <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
         //   checked={this.state.state.checkedB}
            onChange={this.handleChange}
            name="Television"
          />
        }
        label="Television"
                />
                  <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedC}
            onChange={this.handleChange}
            name="Shower"
          />
        }
        label="Shower"
                />
                  <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="TeaMaker"
          />
        }
        label="Tea Maker"
                />
                 <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="AirConditioning"
          />
        }
        label="Air Conditioning"
                />
                 <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="HairDryer"
          />
        }
        label="Hair Dryer"
                /> <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="BathTub"
          />
        }
        label="BathTub"
                /> <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="Laundary"
          />
        }
        label="Laundary"
                /> <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="RoomFridge"
          />
        }
        label="Room Fridge"
                /> <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="InRoomIron"
          />
        }
        label="In-Room Iron"
                /> <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="PremiumCoffee"
          />
        }
        label="Premium Coffee"
                />
                 <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            // checked={this.state.state.checkedD}
            onChange={this.handleChange}
            name="RoomPurification"
          />
        }
        label="Room Purification"
                />
            </FormGroup>
        

          <button variant="contained" style={{color: "blue" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add Room in {this.state.hotel.HotelName}
          </button>
            </form>
                  <Button>Back</Button>

      </div>
    );
  }
}

export default AddRoom;
