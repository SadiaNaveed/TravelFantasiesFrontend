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
// import userService from "../../services/userService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import queryString from "query-string";
// import { Comment, Icon } from 'semantic-ui-react'
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
      user: [],
      Image: " ",
      comments: [],
    };
  }

  //    onButtonClick = () => {
  //     this.setState({
  //       showComponent: true,
  //     });
  //   }
  // const { user, history } = props;
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  componentDidMount() {
    //const { handle } = this.props.history.user
    const userId = queryString.parse(this.props.history.location.search);
    const userSearch = userId.user;
    console.log(userSearch);
    userService
      .getSingleUser(userSearch)
      .then((data) => {
        this.setState({ user: data });
        {
          this.state.user.Image.data.data &&
            this.setState({
              Image:
                "data:image/jpeg;base64," +
                this.arrayBufferToBase64(this.state.user.Image.data.data),
            });
        }
        this.setState({
          userName: this.state.user.userName,
        });
        this.setState({
          Location: this.state.user.Location,
        });
        this.setState({
          Address: this.state.user.Address,
        });
        this.setState({
          Contactno: this.state.user.Contactno,
        });
        this.setState({
          Website: this.state.user.Website,
        });
        this.setState({
          Facilities: this.state.user.Facilities,
        });
        this.setState({
          Status: this.state.user.Status,
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
      search: "?user=" + id,
    });
  };
  handleuserNameChange(event) {
    this.setState({ userName: event.target.value });
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
            <CardHeader>Details About user</CardHeader>
            <CardBody>
              <Form>
                {/* <CardTitle tag="h3">Details About user</CardTitle> */}

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
                        alt="user"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">User Name</Label>
                      <Input
                        type="text"
                        name="user_Name"
                        id="exampleDate"
                        placeholder="Enter user Name"
                        value={this.state.user.userName}
                        readOnly
                        //onChange={this.handleuserNameChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Email</Label>
                      <Input
                        type="text"
                        name="Location"
                        id="exampleDate"
                        placeholder="Enter Location"
                        value={this.state.user.email}
                        readOnly
                        //  onChange={this.handleLocationChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Password</Label>
                      <Input
                        type="text"
                        name="Contact_No"
                        id="exampleDate"
                        placeholder="Enter user Name"
                        value={this.state.user.Password}
                        readOnly
                        // onChange={this.handleContactnoChange}
                      />
                    </FormGroup>
                  </Col>
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
