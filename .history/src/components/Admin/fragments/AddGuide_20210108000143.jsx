import {
  CssBaseline,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import ImageUploader from "react-images-upload";
import AppBarComponenet from "./AppBar";
import userService from "../../../services/UserService";
import Map from "./Map";
import { toast } from "react-toastify";

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
const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class AddGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: "",
      Role: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ Name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ Email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ Password: event.target.value });
  }

  handleRoleChange = async (event) => {
    this.setState({ Role: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.Name);
    formData.append("email", this.state.Email);
    formData.append("password", this.state.Password);
    formData.append("role", this.state.Role);

    console.log(this.state);
    console.log(formData);
    const data = this.state;
    // userService
    //   .register(formData)
    //   .then((response) => {
    //     alert(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error(err.response.data, {
    //       position: toast.POSITION.TOP_LEFT,
    //     });
    //   });
    userService
      .register(
        this.state.Name,
        this.state.Email,
        this.state.Password,
        this.state.Role
      )
      .then((data) => {
        toast.success("New user has been Added", {
          position: toast.POSITION.TOP_CENTER,
        });
        // props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  }

  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "240px" }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Form to Add User</CardHeader>
            <CardBody>
              <Form>
                <CardTitle tag="h3">Details About Hotel</CardTitle>

                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="Place">Select User Role</Label>

                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.Role}
                        onChange={this.handleRoleChange}
                        fullWidth
                      >
                        <MenuItem value={"user"}>User</MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                        <MenuItem value={"guide"}>Guide</MenuItem>
                      </Select>
                    </FormGroup>
                  </Col>

                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Name</Label>
                      <Input
                        type="text"
                        name="Name"
                        id="exampleDate"
                        placeholder="Enter Name"
                        value={this.state.Name}
                        onChange={this.handleNameChange}
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
                        name="Email"
                        id="exampleDate"
                        placeholder="Enter Email"
                        value={this.state.Email}
                        onChange={this.handleEmailChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="exampleDate">Password</Label>
                      <Input
                        type="text"
                        name="Password"
                        id="exampleDate"
                        placeholder="Enter Password"
                        value={this.state.Password}
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
                  Add User
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

export default AddGuide;
