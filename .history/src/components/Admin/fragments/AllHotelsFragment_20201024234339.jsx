

import { Grid, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import hotelService from '../../../services/HotelService';
import SingleHotel from '../../Hotels/SingleHotel';
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});
        

class AllHotel extends Component {
    constructor() {
        super();
        this.state = {
            render: '',
            open: false,
            home: true,
            hotels: [],
        }
        // this.handleHotelClick = this.handleHotelClick.bind(this);    
    }
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount() {
     hotelService
        .getHotels(this.props.page, this.props.perPage)
        .then((data) => {
          this.setState({ hotels: data });

          // setTotal(data.total);
          // setPerPage(10);
        })
        .catch((err) => {
          console.log(err);
        });
}
     
    render() {
        return (
            <div style={{marginLeft:"300px", marginTop:"120px"}}>
                <h1>
                    Hello All Hotel
                </h1>
                {this.state.hotels.length == 0 ? (
          <p>There are no hotels</p>
        ) : (
            <Grid container spacing={3}>
              {/* var base64Flag = 'data:image/jpeg;base64,';
            this.state.hotel.map((hotel, index) => (
              this.setState({ Img: base64Flag +  this.arrayBufferToBase64(hotel.Image.data) })
          )) */}

              {/*            
   console.log(this.state.Img); */}
              {this.state.hotels.map((hotel, index) => (
                 hotel.Image = 'data:image/jpeg;base64,' + this.arrayBufferToBase64(hotel.Image.data.data),
                // console.log(hotel.Image),
               // <img src={hotel.Image} style={{height:"30px",width: "30px"}} alt='Helpful alt text'/>

                 <SingleHotel key={index} hotel={hotel} />
              ))}
            </Grid>

          )}
                
            </div>

        );
      
        
    
    }
   
}
// export default withStyles(useStyles)(HomeFragment)
export default AllHotel;