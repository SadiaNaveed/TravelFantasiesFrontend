import { makeStyles, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class addHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HotelName: " ",
      Email: " ",
    };
    this.handleHotelNameChange = this.handleHotelNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHotelNameChange(event) {
    this.setState({ HotelName: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ Email: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.HotelName + this.state.Email);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <form
          onSubmit={this.handleSubmit}
          style={{ padding: "300px", marginLeft: "300px" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <label>
                  <h3>Hotel Name:</h3>
                </label>
              </div>
              <div class="col-sm">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={this.state.HotelName}
                  onChange={this.handleHotelNameChange}
                />
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-sm">
                <label>
                  <label>
                    <h3>Email:</h3>
                  </label>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={this.state.Email}
                    onChange={this.handleEmailChange}
                  />
                </label>
              </div>
              <div class="col-sm">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default addHotel;
