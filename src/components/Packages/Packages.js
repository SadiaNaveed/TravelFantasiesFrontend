import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingComponent from "./RatingComponent";
import {
  UncontrolledCarousel,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardBody,
  CardSubtitle,
  CardLink,
  CardImg,
  Badge,
  Table,
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import PackagesDetailPage from "./PackagesDetailPage";
const items = [
  {
    src: require("../../Asserts/Family1 (1) - Copy.png"),
    altText: "Slide 1",
    caption: "Starting from 200$",
    header: "Spend Great Time With Family With Our Family Package",
    key: "1",
  },

  {
    src: require("../../Asserts/tumblr_mza8hfXbWv1rji352o1_1280 (1) - Copy.jpg"),
    altText: "Slide 3",
    caption: "Starting From 100$",
    header: "Hit The Road of Adventure With Friends ",
    key: "3",
  },
  {
    src: require("../../Asserts/honeymoon (1) - Copy.jpg"),
    altText: "Slide 2",
    caption: "Honeymoon Starting From 500$",
    header: "Spend Pleasure Time With Your Better Half",
    key: "2",
  },
];

class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      Img: "",
      rating: 1,
      rating_custom_icon: 6,
      rating_half_star: 3.5,
      rating_empty_initial: 0,
    };
  }

  onStarClickHalfStar(nextValue, prevValue, name, e) {
    const xPos =
      (e.pageX - e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    this.setState({ rating_half_star: nextValue });
  }

  DetailPage(item) {
    console.log(item);
    this.props.setcurrentPackage(item);
  }

  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/Packages")
      .then((res) => {
        console.log("RES-----", res.data);
        this.setState({ items: res.data });
      })
      .catch((err) => {
        console.log("--error--", err);
      });
  }
  render() {
    const halfStar = {
      onStarClick: this.onStarClickHalfStar.bind(this),
      renderStarIcon: (index, value) => {
        return (
          <span>
            <i className={index <= value ? "fas fa-star" : "far fa-star"} />
          </span>
        );
      },
      renderStarIconHalf: () => {
        return (
          <span>
            <span style={{ position: "absolute" }}>
              <i className="far fa-star" />
            </span>
            <span>
              <i className="fas fa-star-half" />
            </span>
          </span>
        );
      },
    };

    return (
      <div>
        <UncontrolledCarousel className="danger" items={items} />
        {this.state.items.map((item, index) => {
          console.log("----item---", item.Images[0].split("uploads")[1]);
          return (
            <Card style={{ margin: 30 }}>
              <Row>
                <Col lg="6" md="6" sm="12">
                  <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    animateOut="animate__fadeOutLeft"
                  >
                    <Badge
                      color="success"
                      style={{ position: "absolute", padding: 10 }}
                    >
                      Flat 20% OFF
                    </Badge>
                    <CardImg
                      top
                      width="50%"
                      // src={
                      //   "data:image/jpeg;base64," +
                      //   this.arrayBufferToBase64(item.Images.data.data)
                      //   }
                      src={`http://localhost:4000/${
                        item.Images[0].split("uploads")[1]
                      }`}
                      alt=" "
                    />
                  </ScrollAnimation>
                </Col>
                <Col lg="6" md="6" sm="12">
                  <CardBody>
                    <ScrollAnimation
                      animateIn="animate__fadeInRight"
                      animateOut="animate__fadeOutRight"
                    >
                      <CardTitle tag="h5">{item.PalaceName}</CardTitle>
                      <CardTitle tag="h4">{item.PackageName}</CardTitle>
                    </ScrollAnimation>

                    <h3> </h3>
                    <div style={{ fontSize: 24 }}>
                      <RatingComponent name="app1" />
                    </div>

                    <h3> </h3>
                    <div style={{ fontSize: 24 }}>
                      <RatingComponent
                        name="app6"
                        starColor="#ffb400"
                        emptyStarColor="#ffb400"
                        value={this.state.rating_half_star}
                        onStarClick={halfStar.onStarClick}
                        renderStarIcon={halfStar.renderStarIcon}
                        renderStarIconHalf={halfStar.renderStarIconHalf}
                      />
                    </div>

                    <ScrollAnimation
                      animateIn="animate__fadeInRight"
                      animateOut="animate__fadeOutRight"
                      delay={1000}
                    >
                      <CardText>{item.Detail}</CardText>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateIn="animate__fadeInRight"
                      animateOut="animate__fadeOutRight"
                      delay={1500}
                    >
                      <CardText>
                        <small className="text-muted"></small>
                      </CardText>
                      <Table striped>
                        <thead>
                          <tr>
                            <th>Meals/Day</th>
                            <th>Hotel</th>
                            <th>Allowed Person</th>
                            <th>Days</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.Meal}</td>
                            <td>{item.Hotel}</td>
                            <td>{item.AllowedPersons}</td>
                            <td>{item.no_of_days}</td>
                          </tr>
                        </tbody>
                      </Table>
                      {/* <Link to={"/book-packages"} style={{ textDecoration: "none" }}>
                      <Col col="3" md="12">
                       <Button style={{ }} outline color="info">
                       Book Now
                      </Button>
                      </Col>
                   </Link> */}

                      <Link
                        to={"/PackagesDetailPage"}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          onClick={() => this.DetailPage(item)}
                          style={{ marginTop: 50 }}
                          outline
                          color="info"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </ScrollAnimation>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Packages;
