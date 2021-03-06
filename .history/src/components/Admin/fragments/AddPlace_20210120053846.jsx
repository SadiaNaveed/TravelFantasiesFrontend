import { CssBaseline, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import ImageUploader from 'react-images-upload';
import AppBarComponenet from "./AppBar";
import PlacesService from "../../../services/PlaceService";
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
import { toast } from "react-toastify";
import Joi from "joi-browser";


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
      placeName: " ",
      City: " ",
      selectedFile: [],
      Description: " "
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleplaceNameChange = this.handleplaceNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.change = this.change.bind(this);

  }
  schema = {
    placeName: Joi.string().required(),
    City: Joi.string().required(),
    Description: Joi.string().required(),

  };
  validate = (
    placeName,
    City,
    Description
  ) => {
    const data = {
      placeName,
      City,
      Description
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
  handleplaceNameChange(event) {
    this.setState({placeName: event.target.value });
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
    if (
      this.validate(
        this.state.placeName,
        this.state.City,
        this.state.Description,
        
      )
    )
      {
    const formData = new FormData();
     formData.append("placeName", this.state.placeName);
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
}

  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "240px" }}>
      <Col sm="12">
        <Card>
          <CardHeader>Please Fill Out The Form to Add Place</CardHeader>
          <CardBody>
            <Form>
              <CardTitle tag="h3">Details About Place</CardTitle>

              <Row form>

                <Col md={6} sm={12} lg={6}>
                  <FormGroup>
                    <Label for="exampleDate">Place Name</Label>
                    <Input
                      type="text"
                      name="Place_Name"
                      id="exampleDate"
                      placeholder="Enter Place Name"
                      value={this.state.placeName}
                      onChange={this.handleplaceNameChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6} sm={12} lg={6}>
                  <FormGroup>
                    <Label for="exampleDate">City</Label>
                    <Input
                      type="text"
                      name="City"
                      id="exampleDate"
                      placeholder="Enter City name"
                      value={this.state.City}
                      onChange={this.handleCityChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} lg={6}>
                  <FormGroup>
                    <Label for="exampleDate">Description</Label>
                    <Input
                      type="text"
                      name="Description"
                      id="exampleDate"
                      placeholder="Enter Description"
                      value={this.state.Description}
                      onChange={this.handleDescriptionChange}
                    />
                  </FormGroup>
                </Col>
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
                Add Place
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

export default addPlace;