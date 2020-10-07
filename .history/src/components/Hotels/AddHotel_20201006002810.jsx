import { makeStyles, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 13,
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
  classes = useStyles();

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
                id="outlined-basic"
                variant="outlined"
                value={this.state.HotelName}
                onChange={this.handleHotelNameChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={this.state.Email}
                onChange={this.handleEmailChange}
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
