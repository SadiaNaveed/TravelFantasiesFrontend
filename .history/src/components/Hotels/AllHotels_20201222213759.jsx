import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleHotel from "./SingleHotel";
import { Grid } from "@material-ui/core";

export class AllHotels extends Component {
  constructor(props) {
    super(props);

    this.handleCommentEdit = this.handleCommentEdit.bind(this);
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  handleCommentEdit(event) {
    var copyData = data;
    var newData;
    var commentIndex = copyData.findIndex(function (c) {
      console.log(c.Name);
      return c.Name == [event.target.name];
    });
    console.log(commentIndex);
    if (commentIndex === -1) {
      newData = { Name: event.target.name, Checked: event.target.checked };
      data.push(newData);
    } else {
      var updatedComment = update(copyData[commentIndex], {
        Checked: { $set: event.target.checked },
      });
      var newData = update(data, {
        $splice: [[commentIndex, 1, updatedComment]],
      });
      data = newData;
    }
    console.log(newData);
    console.log(data);

    // this.setState({ floors: newData });
    // console.log(this.state.floors);
  }
  render() {
    return (
      <div>
        {this.props.results.length == 0 ? (
          <p>Loading...</p>
        ) : (
          <Grid container spacing={3}>
            {this.props.results.map(
              (hotel, index) => (
                (hotel.Image =
                  "data:image/jpeg;base64," +
                  this.arrayBufferToBase64(hotel.Image.data.data)),
                (
                  <SingleHotel
                    key={index}
                    hotel={hotel}
                    handle={this.props.handleCommentEdit}
                  />
                )
              )
            )}
          </Grid>
        )}
      </div>
    );
  }
}

export default AllHotels;
