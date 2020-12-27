import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  state = {};
  render() {
    return (
      <div>
        <UncontrolledCarousel className="danger" items={items} />
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
                  src={require("../../Asserts/Family1 (1) - Copy.png")}
                  alt="Card image cap"
                />
              </ScrollAnimation>
            </Col>
            <Col lg="6" md="6" sm="12">
              <CardBody>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                >
                  <CardTitle tag="h5">Family Package</CardTitle>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                  delay={1000}
                >
                  <CardText>
                    Today’s parents looking to encourage family bonding time
                    through group outings and home activities face steep
                    competition with all of the electronic distractions keeping
                    their children’s attention. The struggle to keep families
                    connected, though difficult, is an extremely important
                    aspect of modern parenting.
                  </CardText>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                  delay={1500}
                >
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
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
                        <td>2</td>
                        <td>Yes</td>
                        <td>5</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button color="success">Book Now</Button>
                  <Link to={"/PackagesDetailPage"} style={{ textDecoration: "none" }}>
            
              <Button style={{ marginTop: 50 }} outline color="info">
              Learn More
              </Button>
          
          </Link>
                  
                  
                </ScrollAnimation>
              </CardBody>
            </Col>
          </Row>
        </Card>
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
                  src={require("../../Asserts/honeymoon (1) - Copy.jpg")}
                  alt="Card image cap"
                />
              </ScrollAnimation>
            </Col>
            <Col lg="6" md="6" sm="12">
              <CardBody>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                >
                  <CardTitle tag="h5">Honey Moon</CardTitle>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                  delay={1000}
                >
                  <CardText>
                    Your honeymoon sets the tone for your new life - A honeymoon
                    provides your first memorable moments as a couple. It sets
                    the stage on how a couple treats each other, and prepares
                    the path to wedded bliss. Not to mention some great
                    honeymoon memories that will help keep the spark alive while
                    reminiscing.
                  </CardText>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                  delay={1500}
                >
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
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
                        <td>2</td>
                        <td>Yes</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button color="success">Book Now</Button>
                </ScrollAnimation>
              </CardBody>
            </Col>
          </Row>
        </Card>
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
                  Flat 30% OFF
                </Badge>
                <CardImg
                  top
                  width="50%"
                  src={require("../../Asserts/tumblr_mza8hfXbWv1rji352o1_1280 (1) - Copy.jpg")}
                  alt="Card image cap"
                />
              </ScrollAnimation>
            </Col>
            <Col lg="6" md="6" sm="12">
              <CardBody>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                >
                  <CardTitle tag="h5">Adventure With Friends</CardTitle>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                  delay={1000}
                >
                  <CardText>
                    Going out with your adventurous friends doesn't only mean
                    traveling for luxury and fun, it also means getting to know
                    more about them and about yourself and it could also be a
                    way for you to have a stronger relationship with your
                    friends. Like anyone else, adventurous friends never settle
                    for less
                  </CardText>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOut="animate__fadeOutRight"
                  delay={1500}
                >
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
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
                        <td>2</td>
                        <td>Yes</td>
                        <td>5</td>
                        <td>7</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button color="success">Book Now</Button>
                </ScrollAnimation>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Packages;
