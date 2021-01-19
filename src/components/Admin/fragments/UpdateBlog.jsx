import React, { Component } from "react";
import {
  CssBaseline,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import queryString from "query-string";
import BlogService from "../../../services/BlogService";
import SidebarComponent from "./SidebarComponent";

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
import { Delete, Edit, Update, Visibility } from "@material-ui/icons";
import Map from "./Map";
import { toast } from "react-toastify";
import Joi from "joi-browser";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    //   fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
}));

class UpdateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      Image: " ",
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  schema = {
    Title: Joi.string().required(),
    Description: Joi.string().required(),
    
  };
  validate = (
    Title,
    Description,
  ) => {
    const data = {
        Title,
        Description,
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
  handleSubmit(event) {
    event.preventDefault();
    if (
      this.validate(
        this.state.Title,
        this.state.Description,
      )
    ) {
      const formData = new FormData();
      formData.append("Title", this.state.Title);
      formData.append("Description", this.state.Description);
      formData.append("Category", this.state.Blogs.Category);

      for (var x = 0; x < this.state.selectedFile.length; x++) {
        formData.append("file", this.state.selectedFile[x]);
      }
      console.log(this.state);
      console.log(formData);

      BlogService
        .updateBlog(this.state.Blogs._id, formData)
        .then((response) => {
          alert(response);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_LEFT,
          });
        });
    }
  }
  componentDidMount() {
    const BlogId = queryString.parse(this.props.history.location.search);
    const BlogSearch = BlogId.blog;
    console.log(BlogSearch);
    BlogService
      .getSingleBlog(BlogSearch)
      .then((data) => {
        this.setState({ Blogs: data });
        this.setState({
          Image:
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.state.Blogs.Image.data.data),
        });
        this.setState({
          Title: this.state.Blogs.Title,
        });
        this.setState({
          Description: this.state.Blogs.Description,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleTitleChange(event) {
    this.setState({ Title: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
  }
  
  render() {
   
    return (
      <div style={{ marginTop: "50px", marginLeft: "40px" }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Form to Add Blog</CardHeader>
            <CardBody>
              <Form>
                <CardTitle tag="h3">Details About Blog</CardTitle>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <img
                        src={this.state.Image}
                        style={{
                          position: "absolute",
                          marginLeft: "190px",
                          height: "100px",
                          width: "100px",
                          backgroundColor: grey[50],
                        }}
                        alt="Blog"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Title</Label>
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
                  Update Blog
                </Button>
                <Button
                  style={{
                    marginTop: 30,
                    marginLeft: "30px",
                    alignSelf: "center",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                  onClick={this.props.history.goBack}
                >
                  Back
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
export default withRouter(UpdateBlog);