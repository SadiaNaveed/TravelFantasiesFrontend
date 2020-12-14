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
    //   fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
}));
// const handleClick = () => {
//   <HotelBooking/>
// }
class SinglePlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: "false",
    };
    //  this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick = () => {
    this.props.history.push({
      pathname: "/PlaceDetail",
      search: "?place=" + this.props.place._id,
    });
  };

  // const { hotel, history } = props;

  render() {
    const { place, history } = this.props;

    return (
      <Box
        p="10px"
        bgcolor="#F0FFF0"
        height="500px"
        mx="30px"
        borderRadius="6px"
        margin="10px"
        marginBottom="70px"
        border="1px solid"
        borderColor="#C0C0C0"
      >
        {Place.Image? 
        (place.Image = "data:image/jpeg;base64," +
        this.arrayBufferToBase64(place.Image.data.data),
        <img
          src={this.props.Place.Image}
          style={{
            marginLeft: "10px",
            height: "300px",
            width: "310px",
            backgroundColor: grey[50],
          }}
          alt="hotel"
            />),
          :null)}
        <Typography variant="h4">{this.props.Place.Name}</Typography>
        <Typography variant="h5">City {this.props.Place.City}</Typography>
        <Typography variant="h6">Ratings {this.props.Place.Ratings}</Typography>
        <Button
          style={{
            backgroundColor: "#e7e7e7",
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
