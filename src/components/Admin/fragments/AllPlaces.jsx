import {
  Button,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { useHistory, withRouter } from "react-router";
import placeService from "../../../services/PlaceService";
import Paper from "@material-ui/core/Paper";
import { Delete, Edit, Update, Visibility } from "@material-ui/icons";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const classes = makeStyles((theme) => ({
  heading: {
    color: "black",
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
  createData("Name", "Lahore fort", "Ushu Forest", "Hawks bay beach"),
  createData("Location", "Lahore", "Kalam", "Karachi"),
];

class AllPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
      open: false,
      home: true,
      places: [],
      history: useHistory,
    };
    this.onViewButtonClick = this.onViewButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onUpdateButtonClick = this.onUpdateButtonClick.bind(this);
  }
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    placeService
      .getPlace(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ places: data });

        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onViewButtonClick = (id) => {
    // let history = useHistory();
    this.props.history.push({
      pathname: "/PlaceView",
      search: "?place=" + id,
    });
  };
    onUpdateButtonClick = (id) => {
      this.props.history.push({
        pathname: "/UpdatePlace",
        search: "?place=" + id,
      });
    };
  onDeleteButtonClick = (id) => {
    placeService
      .deletePlace(id)
      .then((response) => {
        alert(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={{ marginLeft: "250px", marginTop: "120px" }}>
        <h1 align="center">All Places</h1>
        <div class="card">
          <header class="card-header">
            <small class="text-muted">All Places</small>
          </header>
          <div class="card-body">
            <div></div>

            <div class="position-relative table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th
                      class="font-weight-bold"
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Place Name</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">City</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Description</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody style={{ cursor: "pointer" }}>
                  {this.state.places.map(
                    (place, index) => (
                      (place.Image =
                        "data:image/jpeg;base64," +
                        this.arrayBufferToBase64(place.Image.data.data)),
                      (
                        <tr class="" tabIndex="0">
                          <td class="font-weight-bold">{place.place_name}</td>
                          <td class="">{place.City}</td>
                          <td class="">{place.Description}</td>
                          <td>
                            <Button
                              onClick={() => this.onViewButtonClick(place._id)}
                            >
                              <Visibility />
                            </Button>
                            <Button
                            onClick={() => this.onUpdateButtonClick(place._id)}>
                              <Edit />
                            </Button>
                            <Button
                              onClick={() =>
                                this.onDeleteButtonClick(place._id)
                              }
                            >
                              <Delete />{" "}
                            </Button>
                          </td>
                        </tr>
                      )
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllPlaces);
