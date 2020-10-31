import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
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
      };
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.change = this.change.bind(this);

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
     change = async (event) => {
    // this.setState({ value: event.target.value });
         this.setState({ Category: event.target.value });
      //console.log(this.state.Category);
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
      <div style={{ marginTop: "100px", marginLeft:"300px", marginBottom:"100px"}}>
        <h1 style={{ position: "relative",marginLeft:"200px", fontSize: 50 }}>
                Add Room Category
        </h1>

            <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={this.handleClick}
      >
        <MoreVertIcon />
            </IconButton>
             
            <select onChange={this.change} value={this.state.Category}>
                {this.state.Categories.map((Category, index) => (
                     <option  key={Category._id} value={Category._id}>{Category.CategoryName}</option>
          
            ))}
            </select>
      
      {/* <Menu
        id="long-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {this.state.options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
            {option}
          </MenuItem>
        ))}
            </Menu> */}

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
                    <h3>Room Category Name:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="CategoryName"
                    fullWidth
                    value={this.state.value}
                    onChange={this.handleCategoryNameChange}
                  />
                </div>
              </div>
            </Grid>
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
           
          </Grid>
          <button variant="contained" style={{color: "blue" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Room Category{" "}
          </button>
            </form>
            <Button>Back</Button>

      </div>
    );
  }
}

export default AddRoom;
