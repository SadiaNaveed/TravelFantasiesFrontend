import { Button, Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { useHistory, withRouter } from "react-router";
import hotelService from '../../../services/HotelService';
import Paper from '@material-ui/core/Paper';
import { Delete, Edit, Update, Visibility } from '@material-ui/icons';
import roomService from '../../../services/RoomService';
import queryString from 'query-string';  

        
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const classes = makeStyles((theme) => ({
  heading: {
    color: "black",
    // marginTop: "40px",
    //paddingRight: "100px",
    // fontSize: "21",
        fontStyle: "italic",
    fontSize: 25,
        textAlign: "center",
    
  },
  table: {
    minWidth: 500,
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Name', 'Nishat', 'PC', 'Serena'),
  createData('Location', "Lahore",  "Lahore",  "Lahore"),
  createData('Cost per Day', 262, 16.0, 24),
  createData('Book Now', <button>Book Now</button>, <button>Book Now</button>, <button>Book Now</button>),
  
];

class RoomView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: '',
            open: false,
            home: true,
          hotels: [],
          Image: "",
            history: useHistory,
      }
             this.onViewButtonClick = this.onViewButtonClick.bind(this);    

    }
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
     componentDidMount() {
    const hotelId = queryString.parse(this.props.history.location.search);
         const hotelSearch = hotelId.hotel;
         console.log( hotelSearch);
     roomService
     .getHotelRoom(hotelSearch)
        .then((data) => {
            this.setState({ hotels: data });
            
          
        })
        .catch((err) => {
          console.log(err);
        });
          
  };

  onViewButtonClick = (id) => {
    // let history = useHistory();
   this.props.history.push({
       pathname: '/HotelView',
       search: '?hotel=' + id,
       
    }) 
  }
  onAllRoomsClick  = (id) => {
    // let history = useHistory();
   this.props.history.push({
       pathname: '/RoomsView',
       search: '?hotel=' + id,
       
    }) 
  }
  onAddRoomClick = (id) => {
    // let history = useHistory();
   this.props.history.push({
       pathname: '/AddRoom',
       search: '?hotel=' + id,
       
    }) 
  }
    render() {
        //  const classes = useStyles();
      //  const { hotel } = this.props;
      // // const history = this.props.history;
      // console.log(this.props.history);
      // const history = useHistory;
      // console.log(history);
        return (
            <div style={{marginLeft:"250px", marginTop:"120px"}}>
                <h1>
                    Hello All Hotel
                </h1>
                {this.state.hotels.length == 0 ? (
          <p>There are no Rooms</p>
        ) : (
            <Grid container spacing={0}>
              
                {/* //  <SingleHotel key={index} hotel={hotel} /> */}
                   <TableContainer component={Paper} style={{marginBottom:"10px", marginTop: "40px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Hotel Name</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Cost</StyledTableCell>
                          <StyledTableCell align="center">Contact Number</StyledTableCell>
            <StyledTableCell align="center">Room</StyledTableCell>              
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
                      <TableBody>
                        {this.state.hotels.map((hotel, index) => (
               //  hotel.Image = 'data:image/jpeg;base64,' + this.arrayBufferToBase64(hotel.Image.data.data),
                          this.setState({
                            Image: 'data:image/jpeg;base64,' + this.arrayBufferToBase64(hotel.Image.data.data)
                          })
            <StyledTableRow key={hotel._id}>
              <StyledTableCell component="th" scope="row">
                {hotel.Category}
              </StyledTableCell>
              <StyledTableCell align="center">{hotel.Description}</StyledTableCell>
              <StyledTableCell align="center">{hotel.Cost}</StyledTableCell>
                            <StyledTableCell align="center">{hotel.Image}</StyledTableCell>
                             <StyledTableCell align="center">

                            <Button onClick={() => this.onAllRoomsClick(hotel._id)}>View Rooms </Button>
                              <Button onClick={() => this.onAddRoomClick(hotel._id)}>Add Room </Button>

                              </StyledTableCell>
                            <StyledTableCell align="center">
                              {/* onClick = {this.onViewButtonClick(hotel._id)} */}
                              {/*   */}
                              <Button onClick={() => this.onViewButtonClick(hotel._id)} ><Visibility /></Button>
                              <Button><Edit /> </Button>
                              <Button><Delete /> </Button>
                             
                            </StyledTableCell>  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>

                
              
            </Grid>

          )}
    
                 
            </div>

        );
      
        
    
    }
   
}
// export default withStyles(useStyles)(HomeFragment)
export default withRouter(RoomView);