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
import PlacesService from "../../../services/PlaceService";
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

class UpdatePlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: [],
      Image: " ",
    };
    this.handleplaceNameChange = this.handleplaceNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
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
  handleSubmit(event) {
    event.preventDefault();
    if (
        this.validate(
            this.state.placeName,
            this.state.City,
            this.state.Description,
      )
    ) {
      const formData = new FormData();
      formData.append("placeName", this.state.placeName);
     formData.append("City", this.state.City);
     formData.append("Description", this.state.Description);

      for (var x = 0; x < this.state.selectedFile.length; x++) {
        formData.append("file", this.state.selectedFile[x]);
      }
      console.log(this.state);
      console.log(formData);

      PlacesService
        .updatePlace(this.state.place._id, formData)
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
    const PlaceId = queryString.parse(this.props.history.location.search);
    const PlaceSearch = PlaceId.blog;
    console.log(PlaceSearch);
    PlacesService
      .getSinglePlace(PlaceSearch)
      .then((data) => {
        this.setState({ place: data });
        this.setState({
          Image:
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.state.place.Image.data.data),
        });
        this.setState({
          placeName: this.state.place.placeName,
        });
        this.setState({
            City: this.state.place.City,
          });
        this.setState({
          Description: this.state.place.Description,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleplaceNameChange(event) {
    this.setState({placeName: event.target.value });
  }
  handleCityChange(event) {
    this.setState({ City: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
  }
  
  render() {
   
    return (
      <div style={{ marginTop: "50px", marginLeft: "40px" }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Form to Add Place</CardHeader>
            <CardBody>
              <Form>
                <CardTitle tag="h3">Details About Place</CardTitle>

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
export default withRouter(UpdatePlace);