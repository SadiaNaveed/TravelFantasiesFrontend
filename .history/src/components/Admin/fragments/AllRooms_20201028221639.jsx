import { Button, CssBaseline, Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import hotelService from '../../../services/HotelService';
import Paper from '@material-ui/core/Paper';
import { Delete, Edit, Update, Visibility } from '@material-ui/icons';
import AppBarComponenet from './AppBar';

        
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
class AllRooms extends Component {
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
        //  const classes = useStyles();

        return (
            <div> 
            <CssBaseline />
      <AppBarComponenet />
      {/* {home ? <HomeFragment /> : null}   */}
            {/* <SidebarComponent /> */}
            <div style={{ marginLeft: "50px", marginTop: "120px", marginBottom:"50px" }}></div>
            {/* <div style={{marginLeft:"250px", marginTop:"120px"}}> */}
                <h1>
                    Hello All Hotel
                </h1>
                {this.state.hotels.length == 0 ? (
          <p>There are no hotels</p>
        ) : (
            <Grid container spacing={0}>
              
                {/* //  <SingleHotel key={index} hotel={hotel} /> */}
                   <TableContainer component={Paper} style={{marginBottom:"10px", marginTop: "40px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Room Id</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Cost</StyledTableCell>
            <StyledTableCell align="center">Room Image</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
                      <TableBody>
                        {this.state.hotels.map((hotel, index) => (
                 hotel.Image = 'data:image/jpeg;base64,' + this.arrayBufferToBase64(hotel.Image.data.data),
         
            <StyledTableRow key={hotel._id}>
              <StyledTableCell component="th" scope="row">
                {hotel.HotelName}
              </StyledTableCell>
              <StyledTableCell align="center">{hotel.Location}</StyledTableCell>
              <StyledTableCell align="center">{hotel.Cost}</StyledTableCell>
                            <StyledTableCell align="center">{hotel.Contactno}</StyledTableCell>
                            <StyledTableCell align="center">
                              <Button><Visibility /></Button>
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
    
                             <Button>Back</Button>

            </div>

        );
      
        
    
    }
   
}
// export default withStyles(useStyles)(HomeFragment)
export default AllRooms;