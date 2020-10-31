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

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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
const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });
class AddRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        CategoryName: " ",
        Description: " ",
        SelectedCategory: " ",
    //     state: {
    //         checkedA: false,
    // checkedB: false,
    // checkedC: false,
    // checkedD: false,

    //     },
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
    handleChange = (event) => {
       setState({...state, [event.target.name]: event.target.checked });
        //this.setState({ state.checkedA: !this.state.state.checkedA});
       // this.setState({ ...this.state.checked, [event.target.name]: event.target.name });
        //this.setState({ checked: this.state.checked.concat( event.target.checked) });
        //console.log(this.state.checked);
        console.log(state);
                console.log(state.checkedA);
        console.log(state.checkedB);
        console.log(state.checkedC);
                console.log(state.checkedD);



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
      <div style={{ marginTop: "100px", marginLeft:"300px", marginBottom:"100px"}}>
        <h1 style={{ position: "relative",marginLeft:"200px", fontSize: 50 }}>
                Add Room Category
        </h1>

            
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
          <button variant="contained" style={{color: "blue" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Room Category{" "}
          </button>
            </form>
            <FormGroup row>
      
      {/* <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={this.state.state.checkedA}
            onChange={this.handleChange}
            name="checkedA"
          />
        }
        label="Custom size"
                /> */}
                <FormControlLabel
        control={<GreenCheckbox checked={state.checkedA} onChange={this.handleChange} name="checkedA" />}
        label="Custom color"
      />
                  <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
         //   checked={state.checkedB}
            onChange={this.handleChange}
            name="checkedB"
          />
        }
        label="Custom size"
                />
                  <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={state.checkedC}
            onChange={this.handleChange}
            name="checkedC"
          />
        }
        label="Custom size"
                />
                  <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            checked={state.checkedD}
            onChange={this.handleChange}
            name="checkedD"
          />
        }
        label="Custom size"
                />
                     </FormGroup>
            <Button>Back</Button>

      </div>
    );
  }
}

export default AddRoom;
