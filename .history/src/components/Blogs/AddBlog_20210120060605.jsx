import {
  CssBaseline,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardText,
  CardHeader,
  FormFeedback,
  CardBody,
} from "reactstrap";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
//import AppBarComponenet from "./AppBar";
import BlogService from "../../services/BlogService";
import BlogCategoryService from "../../services/BlogCategoryService";
import { toast } from "react-toastify";
import Joi from "joi-browser";

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
      Description: "",
      SelectedCategory: 0,
      Categories: [],
      selectedFile: [],
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
  }

  schema = {
    Title: Joi.string().required(),
    Description: Joi.string().required(),
    SelectedCategory: Joi.string().required(),
  };
  validate = (Title, Description, SelectedCategory) => {
    const data = {
      Title,
      Description,
      SelectedCategory,
    };
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, this.schema, options);
    console.log(error);
    if (!error) return true;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
      toast.error(errors[item.path[0]], {
        position: toast.POSITION.TOP_LEFT,
      });
    }
    return false;
  };

  componentDidMount() {
    BlogCategoryService.getBlogCategory(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Categories: data });
        console.log(this.state.Categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleTitleChange(event) {
    this.setState({ Title: event.target.value });
  }
  handleLinkChange(event) {
    this.setState({ Link: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
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
    if (
      this.validate(
        this.state.Title,
        this.state.Description,
        this.state.SelectedCategory
      )
    ) {
      const formData = new FormData();
      formData.append("Title", this.state.Title);
      formData.append("Description", this.state.Description);
      formData.append("Category", this.state.SelectedCategory);
      for (var x = 0; x < this.state.selectedFile.length; x++) {
        formData.append("file", this.state.selectedFile[x]);
      }

      console.log(this.state);
      console.log(formData);
      const data = this.state;
      console.log(data);
      BlogService.addBlog(formData)

        .then((response) => {
          alert(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div
        style={{
          marginTop: "40px",
          marginLeft: "70px",
          marginRight: "70px",
          marginBottom: "40px",
        }}
      >
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Form to Add Blog</CardHeader>
            <CardBody>
              <Form>
                <CardTitle tag="h3">Details About Blog</CardTitle>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="Place">Select Blog Category</Label>

                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.SelectedCategory}
                        onChange={this.change}
                        fullWidth
                      >
                        {this.state.Categories.map((Category, index) => (
                          <MenuItem value={Category._id}>
                            {Category.CategoryName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormGroup>
                  </Col>

                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="title">Title</Label>
                      <Input
                        type="text"
                        name="Title"
                        id="title"
                        placeholder="Enter Blog Title"
                        value={this.state.Title}
                        onChange={this.handleTitleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="desc">Description</Label>
                      <Input
                        type="text"
                        name="Description"
                        id="desc"
                        placeholder="Enter Description"
                        value={this.state.Location}
                        onChange={this.handleDescriptionChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="exampleDate">Add Image</Label>
                      <Input type="file" name="file" onChange={this.onDrop} />
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  style={{
                    marginTop: 30,
                    alignSelf: "center",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Add Blog
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <CssBaseline />
      </div>
    );
  }
}

export default AddBlog;
