import { CssBaseline, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import ImageUploader from 'react-images-upload';
import AppBarComponenet from "./AppBar";
import PlacesService from "../../../services/PlaceService";

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class addPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place_name: " ",
      City: " ",
      selectedFile: [],
      Description: " "
    };
    this.onDrop = this.onDrop.bind(this);
    this.handlePlace_nameChange = this.handlePlace_nameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.change = this.change.bind(this);

  }
  handlePlace_nameChange(event) {
    this.setState({place_name: event.target.value });
  }
  handleCityChange(event) {
    this.setState({ City: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
  }
  
  onDrop(event) {
    this.setState({
        selectedFile: event.target.files,     
        });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
     formData.append("Name", this.state.place_name);
     formData.append("City", this.state.City);
     formData.append("Description", this.state.Description);
     
     for(var x = 0; x<this.state.selectedFile.length; x++) {
       formData.append('file', this.state.selectedFile[x])
   }
    console.log(this.state);
    console.log(formData);
    const data = this.state;
    PlacesService
      .addPlace(formData)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <CssBaseline />
      <AppBarComponenet />
        <h1 style={{ position: "relative", textAlign: "center", fontSize: 50 }}>
          Add New Place
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
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Place Name</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Place_Name"
                    fullWidth
                    value={this.state.place_name}
                    onChange={this.handlePlace_nameChange}
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
                      <h3>City</h3>
                    </label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      name="City"
                      fullWidth
                      value={this.state.City}
                      onChange={this.handleCityChange}
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
                    <h3>Description</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    name="Description"
                    value={this.state.Description}
                    onChange={this.handleDescriptionChange}
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
          <button variant="contained" style={{backgroudColor:"#339ba5",color: "black" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Place{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default addPlace;