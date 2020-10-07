import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

class addHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HotelName: " ",
      Email: " ",
    };
    this.handleHotelNameeChange = this.handleHotelNameChange.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHotelNameChange(event) {
    this.setState({ HotelName: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "An essay was submitted: " + this.state.HotelName + this.state.password
    );
    event.preventDefault();
  }
  render() {
    return (
      <div style={{ marginTop: "100px", backgroundColor: "#339ba5" }}>
        <form
          onSubmit={this.handleSubmit}
          style={{ padding: "300px", marginLeft: "300px" }}
        >
          <div>
            <label>
              Hotel Name:
              <TextField
                value={this.state.HotelName}
                onChange={this.handleHotelNameChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <TextField value={this.state.Email} onChange={this.handleEmail} />
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default addHotel;
