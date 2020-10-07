import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

class addHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Please Enter Username",
      password: "************",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "An essay was submitted: " + this.state.username + this.state.password
    );
    event.preventDefault();
  }
  render() {
    return (
      <div style={{ marginTop: "100px", backgroundColor: "#339ba5" }}>
        <form
          onSubmit={this.handleSubmit}
          style={{ padding: "30-px", marginLeft: "300px" }}
        >
          <div>
            <label>
              UserName:
              <TextField
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <TextField
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default addHotel;
