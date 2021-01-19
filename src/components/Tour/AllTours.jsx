import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import SingleTour from "./SingleTour";
import axios from 'axios';

export class AllTours extends Component {
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  render() {
    console.log('******TEST******',this.props.result)
    return (
      <div>
        {/* {this.props.result.length == 0 ? (
          <p>Loading...</p>
        ) : (
          <Grid container spacing={3}>
            {this.props.result.map(
              (tour, index) => (
                (tour.Image =
                   "data:image/jpeg;base64,"+
                   this.arrayBufferToBase64(tour.Image.data.data)),
                (
                  <SingleTour
                    key={index}
                    tour={tour}
                    handle={this.props.handleCommentEdit}
                  />
                )
              )
            )}
          </Grid>
        )} */}
      </div>
    );
  }
}

export default AllTours;