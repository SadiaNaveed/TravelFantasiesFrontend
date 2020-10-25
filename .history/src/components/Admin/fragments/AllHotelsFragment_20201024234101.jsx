

import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import hotelService from '../../../services/HotelService';
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
        }
        // this.handleHotelClick = this.handleHotelClick.bind(this);    
    }
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
                
            </div>

        );
      
        
    
    }
   
}
// export default withStyles(useStyles)(HomeFragment)
export default AllHotel;