import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles } from "@material-ui/core";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
}));
class SinglePlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: "false",
    };
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  onButtonClick = () => {
    this.props.history.push({
      pathname: "/PlaceDetail",
      search: "?place=" + this.props.Place._id,
    });
  };

  // const { hotel, history } = props;

  render() {
    const { place, history } = this.props;

    return (
      <Box
        p="10px"
        bgcolor="#F0FFF0"
        height="385px"
        mx="50px"
        borderRadius="6px"
        marginLeft="70px"
        marginTop="30px"
        marginBottom="30px"
        border="1px solid"
        borderColor="#C0C0C0"
      >
        {/* {this.props.Place.Image ? (
          ((this.props.Place.Image =
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.props.Place.Image.data.data)),
          (
            <div>
              <img
                src={this.props.Place.Image}
                style={{
                  marginLeft: "10px",
                  height: "250px",
                  width: "230px",
                  backgroundColor: "blue",
                }}
                alt="place"
              />
            </div>
          ))
        ) : (
          <p>No Image</p>
        )} */}
        <img
          src={
            "data:image/jpeg;base64," +
            this.arrayBufferToBase64(this.props.Place.Image.data.data)
          }
          style={{ width: "230", height: "250" }}
        />
        <Typography variant="h5">{this.props.Place.place_name}</Typography>
        <Typography variant="h6">City {this.props.Place.City}</Typography>
        <Button
          style={{
            backgroundColor: "#008CBA",
            color: "black",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          onClick={this.onButtonClick}
        >
          View Details
        </Button>
      </Box>
    );
  }
}
export default withRouter(SinglePlace);