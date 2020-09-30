import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

class Form extends Component {
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
      <div style={{ marginTop: "3000px", backgroundColor: "#339ba5" }}>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid
            item
            xs={6}
            style={{
              backgroundColor: "white",
              border: "dotted",
              borderColor: "#339ba5",
            }}
          ></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Form;
// {
//   /* <form>
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               UserName:
//               <TextField
//                 value={this.state.username}
//                 onChange={this.handleUsernameChange}
//               />
//             </label>
//             <label>
//               Password:
//               <TextField
//                 value={this.state.password}
//                 onChange={this.handlePasswordChange}
//               />
//             </label>
//             <input type="submit" value="Submit" />
//           </form>
//         </form> */
// }
