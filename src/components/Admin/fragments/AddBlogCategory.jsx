import {
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
import React, { Component } from "react";
import BlogService from "../../../services/BlogService";
import blogCategoryService from "../../../services/BlogCategoryService";
import { toast } from "react-toastify";
import Joi from "joi-browser";

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class AddBlogCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoryName: " ",
      Description: " ",
    };
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  schema = {
    Description: Joi.string().required(),
    SelectedCategory: Joi.string().required(),
  };
  validate = (
    Description,
    SelectedCategory
  ) => {
    const data = {
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
  handleCategoryNameChange(event) {
    this.setState({ CategoryName: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.validate(
        this.state.Description,
        this.state.SelectedCategory
      )
    )
      {
    const formData = new FormData();
    formData.append("CategoryName", this.state.CategoryName);
    formData.append("Description", this.state.Description);
    console.log(formData.CategoryName);
    console.log(formData.Description);
    console.log(this.state);
    const data = this.state;
    console.log(data);
    blogCategoryService
      .addBlogCategory(data)
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
      <div style={{ marginTop: "100px", marginLeft: "240px" }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Form to Add Blog Category</CardHeader>
            <CardBody>
              <Form>
                <CardTitle tag="h3">Details About Blog Categories</CardTitle>
                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="Place">Blog Category Name</Label>
                      <Input
                        type="text"
                        name="CategoryName"
                        id="exampleDate"
                        placeholder="Blog Category Name"
                        value={this.state.CategoryName}
                        onChange={this.handleCategoryNameChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="Place">Description</Label>
                      <Input
                        type="text"
                        name="Description"
                        id="exampleDate"
                        placeholder="Description"
                        value={this.state.Description}
                        onChange={this.handleDescriptionChange}
                      />
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
                  Add Blog Category
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default AddBlogCategory;
