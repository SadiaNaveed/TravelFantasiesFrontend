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
        CategoryName: " ",
        Description:" ",
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCategoryNameChange(event) {
    this.setState({ CategoryName: event.target.value });
    }
    handleDescriptionChange(event) {
      this.setState({ Description: event.target.value });   
    }
  
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
     
      formData.append("CategoryName", this.state.CategoryName);
      formData.append("Description", this.state.Description);
      
    const data = this.state;
    hotelService
      .addHotelCategory(formData)
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
        <h1 style={{ position: "relative",marginLeft:"200px", fontSize: 50 }}>
          Add Hotel Category
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
                    name="Category_Name"
                    fullWidth
                    value={this.state.CategoryName}
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
                    <h3>Hotel Description:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Description"
                    fullWidth
                    value={this.state.Description}
                    onChange={this.handleDescriptionChange}
                  />
                </div>
              </div>
            </Grid> 
           
          </Grid>
          <button variant="contained" style={{color: "blue" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Hotel Category{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default AddHotelCategory;
