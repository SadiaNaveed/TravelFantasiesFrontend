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
import roomService from "../../../services/RoomService";
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

class UpdateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    console.log(formData);

    roomService
      .getSingleRoom(this.state.room._id, formData)
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
  componentDidMount() {
    const hotelId = queryString.parse(this.props.history.location.search);
    const hotelSearch = hotelId.room;
    console.log(hotelSearch);
    roomService
      .getSingleRoom(hotelSearch)
      .then((data) => {
        this.setState({ user: data });
        this.setState({
          name: this.state.user.name,
        });
        this.setState({
          email: this.state.user.email,
        });
        this.setState({
          password: this.state.user.password,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    // console.log(this.props.history);
    // const classes = useStyles();
    return (
      <div style={{ marginTop: "50px", marginLeft: "290px" }}>
        <Col sm="12">
          <Card>
            <CardHeader>Details About User</CardHeader>
            <CardBody>
              <Form>
                <Row form>
                  <Col md={6} sm={6} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">User Name</Label>
                      <Input
                        type="text"
                        name="Hotel_Name"
                        id="exampleDate"
                        placeholder="Enter User Name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6} sm={6} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Email</Label>
                      <Input
                        type="text"
                        name="Location"
                        id="exampleDate"
                        placeholder="Enter Location"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6} sm={6} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Password</Label>
                      <Input
                        type="text"
                        name="Contact_No"
                        id="exampleDate"
                        placeholder="Enter Hotel Name"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
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
                  Update User
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
export default withRouter(UpdateRoom);
