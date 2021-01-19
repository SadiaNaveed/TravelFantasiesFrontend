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
import BlogService from "../../../services/BlogService";
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

class AllBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
      open: false,
      home: true,
      Blogs: [],
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
    BlogService.getBlog(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Blogs: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onViewButtonClick = (id) => {
    this.props.history.push({
      pathname: "/BlogView",
      search: "?Blog=" + id,
    });
  };
  onDeleteButtonClick = (id) => {
    BlogService
    .deleteBlog(id)
      .then((response) => {
        alert(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onUpdateButtonClick = (id) => {
    this.props.history.push({
      pathname: "/UpdateBlog",
      search: "?Blog=" + id,
    });
  };

  render() {
    return (
      <div style={{ marginLeft: "250px", marginTop: "120px" }}>
        <h1>All Blogs</h1>
        <div class="card">
          <header class="card-header">
            All Blogs<small class="text-muted"></small>
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
                      <div class="d-inline">Title</div>
                    </th>
                    <th
                      class=""
                      style={{ verticalAlign: "middle", overflow: "hidden" }}
                    >
                      <div class="d-inline">Category</div>
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
                  {this.state.Blogs.map(
                    (Blogs, index) => (
                      (Blogs.Image =
                        "data:image/jpeg;base64," +
                        this.arrayBufferToBase64(Blogs.Image.data.data)),
                      (
                        <tr class="" tabIndex="0">
                          <td class="font-weight-bold">{Blogs.Title}</td>
                          <td class="">{Blogs.Category}</td>
                          <td>
                            <Button
                              onClick={() => this.onViewButtonClick(Blogs._id)}
                            >
                              <Visibility />
                            </Button>
                            <Button
                            onClick={() => this.onUpdateButtonClick(Blogs._id)}>
                              <Edit />
                            </Button>
                            <Button
                              onClick={() =>
                                this.onDeleteButtonClick(Blogs._id)
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
export default withRouter(AllBlogs);
