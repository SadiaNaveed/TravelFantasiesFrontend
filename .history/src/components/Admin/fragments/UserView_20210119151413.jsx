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
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import queryString from "query-string";
// import { Comment, Icon } from 'semantic-ui-react'
import hotelService from "../../../services/HotelService";
import ReactStars from "react-rating-stars-component";
import CommentsBlock from "simple-react-comments";
import AppBarComponenet from "./AppBar";
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
import userService from "../../../services/UserService";

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

class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
      Image: " ",
      comments: [],
    };
  }

  //    onButtonClick = () => {
  //     this.setState({
  //       showComponent: true,
  //     });
  //   }
  // const { hotel, history } = props;
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  componentDidMount() {
    //const { handle } = this.props.history.hotel
    const hotelId = queryString.parse(this.props.history.location.search);
    const hotelSearch = hotelId.user;
    console.log(hotelSearch);
    userService
      .getSingleUser(hotelSearch)
      .then((data) => {
        this.setState({ user: data });
        this.setState({
          Image:
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.state.hotel.Image.data.data),
        });
        this.setState({
          HotelName: this.state.hotel.HotelName,
        });
        this.setState({
          Location: this.state.hotel.Location,
        });
        this.setState({
          Address: this.state.hotel.Address,
        });
        this.setState({
          Contactno: this.state.hotel.Contactno,
        });
        this.setState({
          Website: this.state.hotel.Website,
        });
        this.setState({
          Facilities: this.state.hotel.Facilities,
        });
        this.setState({
          Status: this.state.hotel.Status,
        });
        this.setState({
          selectedFile: this.state.Image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ratingChanged(newRating) {
    console.log(newRating);
  }
  onAddRoomClick = (id) => {
    // let history = useHistory();
    this.props.history.push({
      pathname: "/AddRoom",
      search: "?hotel=" + id,
    });
  };
  handleHotelNameChange(event) {
    this.setState({ HotelName: event.target.value });
  }
  handleLocationChange(event) {
    this.setState({ Location: event.target.value });
  }
  handleAddressChange(event) {
    this.setState({ Address: event.target.value });
  }
  handleContactnoChange(event) {
    this.setState({ Contactno: event.target.value });
  }

  handleWebsiteChange(event) {
    this.setState({ Website: event.target.value });
  }
  handleFacilitiesChange(event) {
    this.setState({ Facilities: event.target.value });
  }
  handleStatusChange(event) {
    this.setState({ Status: event.target.value });
  }
  render() {
    // console.log(this.props.history);
    // const classes = useStyles();
    return (
      <div style={{ marginTop: "50px", marginLeft: "40px" }}>
        <Col sm="12">
          <Card>
            <CardHeader>Details About Hotel</CardHeader>
            <CardBody>
              <Form>
                {/* <CardTitle tag="h3">Details About Hotel</CardTitle> */}

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
                        alt="hotel"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Hotel Name</Label>
                      <Input
                        type="text"
                        name="Hotel_Name"
                        id="exampleDate"
                        placeholder="Enter Hotel Name"
                        value={this.state.HotelName}
                        readOnly
                        //onChange={this.handleHotelNameChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Location</Label>
                      <Input
                        type="text"
                        name="Location"
                        id="exampleDate"
                        placeholder="Enter Location"
                        value={this.state.Location}
                        readOnly
                        //  onChange={this.handleLocationChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Contact Number</Label>
                      <Input
                        type="text"
                        name="Contact_No"
                        id="exampleDate"
                        placeholder="Enter Hotel Name"
                        value={this.state.Contactno}
                        readOnly
                        // onChange={this.handleContactnoChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Address</Label>
                      <Input
                        type="text"
                        name="Address"
                        id="exampleDate"
                        placeholder="Enter Address"
                        value={this.state.Address}
                        readOnly
                        //   onChange={this.handleAddressChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Website</Label>
                      <Input
                        type="text"
                        name="Website"
                        id="exampleDate"
                        placeholder="Enter Website link"
                        value={this.state.Website}
                        readOnly
                        //onChange={this.handleWebsiteChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Facilities to be Provided</Label>
                      <Input
                        type="text"
                        name="Facilities"
                        id="exampleDate"
                        placeholder="Enter Facilities of Hotel"
                        value={this.state.Facilities}
                        readOnly
                        //  onChange={this.handleFacilitiesChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Availability Status</Label>
                      <Input
                        type="text"
                        name="Status"
                        id="exampleDate"
                        placeholder="Enter Status of Hotel"
                        value={this.state.Status}
                        readOnly
                        //  onChange={this.handleFacilitiesChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  {/* <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="exampleDate">Availability Status</Label>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.Status}
                        onChange={this.handleStatusChange}
                        fullWidth
                      >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                      </Select>
                    </FormGroup>
                  </Col> */}
                  {/* <Col md={6} sm={12} lg={4}>
                    <FormGroup>
                      <Label for="exampleDate">Add Image</Label>
                      <Input type="file" name="file" onChange={this.onDrop} />
                    </FormGroup>
                  </Col> */}
                </Row>

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
export default withRouter(UserView);
