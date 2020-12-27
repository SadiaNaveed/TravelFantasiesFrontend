import { CssBaseline, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import AppBarComponenet from "./AppBar";
import BlogService from "../../../services/BlogService";
import BlogCategoryService from "../../../services/BlogCategoryService";

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Link: "",
      Description: "",
      SelectedCategory: 0,
      Categories: [],

    };
    // this.onDrop = this.onDrop.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);

  }
  componentDidMount() {
    BlogCategoryService
      .getBlogCategory(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Categories: data });
        console.log(this.state.Categories);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  handleTitleChange(event) {
    this.setState({Title: event.target.value });
  }
  handleLinkChange(event) {
    this.setState({Link: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
  }
  change = async (event) => {
    this.setState({ SelectedCategory: event.target.value });
};
  
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
     formData.append("Title", this.state.Title);
     formData.append("Link", this.state.Link);
     formData.append("Description", this.state.Description);
     formData.append("Category", this.state.SelectedCategory);
     
    console.log(this.state);
    console.log(formData);
    const data = this.state;
    console.log(data);
    BlogService
    .AddBlog(data)
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
          Add New Blog
            </h1>
        
        <form
          onSubmit={this.handleSubmit}
           encType="multipart/form-data"
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
            <h3>Select Blog Category</h3>
            <select onChange={this.change} value={this.state.SelectedCategory}>
                {this.state.Categories.map((Category, index) => (
                     <option  key={Category._id} value={Category._id}> {Category.Name} </option>
          
            ))}
            </select>
            </Grid>
          <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Blog Title</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Title"
                    fullWidth
                    value={this.state.Title}
                    onChange={this.handleTitleChange}
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
                      <h3>Link</h3>
                    </label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      name="Link"
                      fullWidth
                      value={this.state.Link}
                      onChange={this.handleLinkChange}
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
          </Grid>
          <button variant="contained" style={{backgroudColor:"green",color: "black" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Blog
        {" "}
          </button>
        </form>
      </div>
    );
  }
}

export default AddBlog;