import React, { Component } from "react";
import { Grid, Button, Typography, Box, makeStyles } from "@material-ui/core";
// import hotelService from "../../services/HotelService";
import { useHistory, withRouter } from "react-router";
import { grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
//import userService from "../../services/UserService";
import HotelBooking from "./HotelBooking";
import queryString from 'query-string';  
// import { Comment, Icon } from 'semantic-ui-react'
import hotelService from "../../services/HotelService";
import ReactStars from "react-rating-stars-component";
import CommentsBlock from 'simple-react-comments';



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


class HotelDetail extends Component {
  constructor(props) {
        super(props);
      this.state = {
          hotel: [],
          Image: " ",
          comments: [],

        }
          this.ratingChanged = this.ratingChanged.bind(this);    
    }

//    onButtonClick = () => {
//     this.setState({
//       showComponent: true,
//     });
//   }
  // const { hotel, history } = props;
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount () {
         //const { handle } = this.props.history.hotel
         const hotelId = queryString.parse(this.props.history.location.search);
         const hotelSearch = hotelId.hotel;
         console.log( hotelSearch);
     hotelService
     .getSingleHotel(hotelSearch)
        .then((data) => {
            this.setState({ hotel: data });
            this.setState({
                Image: 'data:image/jpeg;base64,' + this.arrayBufferToBase64(this.state.hotel.Image.data.data)
            });
        })
        .catch((err) => {
          console.log(err);
        });
         
    };
     
 ratingChanged(newRating) {
  console.log(newRating);
};
    render() {
        const { hotel, history } = this.props;
console.log(this.props.history);
        // const classes = useStyles();
        return (
            <div style={{ marginTop: "160px", marginBottom: "200px" }}> 
                    <img src={this.state.Image} style={{ position:"absolute",marginLeft: "1000px", height: "500px", width: "610px", backgroundColor: grey[50] }} alt="hotel" /> 
                <Button style={{ backgroundColor: "#4CAF50" }}>
                    Book Now
                 </Button>     
                <Button style={{ backgroundColor: "#008CBA" }}>
                    View on Map
                </Button>
                    <Typography variant='h4' style={{marginLeft:"20px"}}>
                    {this.state.hotel.HotelName}
                </Typography>
                <Typography variant='h5' style={{marginLeft:"20px"}}>
                    {this.state.hotel.Location}
                </Typography>
                <Typography variant='h6'>
                    Ratings {this.state.hotel.Ratings}
                </Typography>
                <h2>Facilities of {this.state.hotel.HotelName}</h2>
                <Typography variant='h6' style={{marginRight:"500px"}}>
                     {this.state.hotel.Facilities}
                </Typography>
                
                <h1> Rate {this.state.hotel.HotelName} </h1>
                <ReactStars
    count={5}
    onChange={this.ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
                />
                <h1>
                    Reviews about {this.state.hotel.HotelName}
                </h1>
<CommentsBlock
                    comments={this.state.comments}
                    
          signinUrl={'/signin'}
          isLoggedIn
        //   reactRouter // set to true if you are using react-router
          onSubmit={text => {
            if (text.length > 0) {
              this.setState({
                comments: [
                  ...this.state.comments,
                  {
                    authorUrl: "mamskm",
                    avatarUrl: 'mdkmsk',
                    createdAt: new Date(),
                    fullName: 'Name',
                    text,
                  },
                ],
              });
              console.log('submit:', text);
            }
          }}
        />

  {/* <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
      <Comment.Content>
        <Comment.Author>Stevie Feliciano</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
          <div>
            <Icon name='star' />5 Faves
          </div>
        </Comment.Metadata>
        <Comment.Text>
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group> */}


   
            </div>
           
        );
    }
};
export default withRouter(HotelDetail);
