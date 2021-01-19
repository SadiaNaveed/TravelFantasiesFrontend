import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  Badge,
} from "reactstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import "./Packages.css";
// import tours from "../components/Package";
// import imgCard1 from "./img-card (1).jpg";
// import imgCard2 from "./img-card (2).jpg";
// import imgCard3 from "./img-card (3).jpg";
// import imgCard4 from "./img-card (4).jpg";

const PackagesDetailPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log("---props----", props);
  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/packageReview/${props.currentPackage._id}`
      )
      .then((res) => {
        console.log("----RES----", res.data);
      })
      .catch((err) => {
        console.log("===error--", err);
      });
  }, []);
  const _addReview = () => {
    const jwt = localStorage.getItem("token");
    if (name === "" || email === "" || message === "") {
      alert("Please fill the feilds!");
    } else {
      let data = {
        Username: name,
        Email: email,
        Comment: message,
        packageID: props.currentPackage._id,
        userID: jwtDecode(jwt)._id,
      };

      axios
        .post("http://localhost:4000/api/packageReview", data)
        .then((res) => {
          console.log("----RES----", res);
        })
        .catch((err) => {
          console.log("===error--", err);
        });
    }
  };
  console.log("---props------------------------", props.currentPackage);
  return (
    <div className="subComponent">
      <Container>
        <section className="tour-cover item-center">
          <Badge color="success" style={{ position: "absolute", padding: 10 }}>
            Flat <h2>{props.currentPackage.Discount}</h2>% OFF
          </Badge>
          <img
            src={`http://localhost:4000/${
              props.currentPackage !== true &&
              props.currentPackage.Images[1].split("uploads")[1]
            }`}
            alt=""
          />
          <h1>{props.currentPackage.PlaceName}</h1>
          <h2>{props.currentPackage.PackageName}</h2>
          <h5>{props.currentPackage.Location}</h5>
          {/* <h4>Spent great time with Friends</h4> */}
          <p>{props.currentPackage.no_of_days}days</p>
        </section>
        <section className="tour-info">
          <Row>
            <Col sm="8">
              <div className="tour-desc">
                <p>{props.currentPackage.Description}</p>
              </div>
            </Col>
            <Col sm="4">
              <Card body outline color="danger">
                <CardBody>
                  <CardTitle tag="h5"></CardTitle>
                  <CardTitle tag="h3">Total Price</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.currentPackage.Cost}
                  </CardSubtitle>
                  <CardTitle tag="h3"> Discount</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.currentPackage.Discount}
                  </CardSubtitle>
                  <CardTitle tag="h3">After Discount</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.currentPackage.Cost -
                      (props.currentPackage.Cost *
                        props.currentPackage.Discount) /
                        100}
                  </CardSubtitle>
                  <CardTitle tag="h5"></CardTitle>
                  <CardTitle tag="h3">Allowed Persons </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.currentPackage.AllowedPersons} persons
                  </CardSubtitle>
                  <CardTitle tag="h3">Meal</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.currentPackage.Meal}
                  </CardSubtitle>
                  <CardTitle tag="h3">Hotel</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.currentPackage.Hotel}
                  </CardSubtitle>

                  <Link
                    to={"/book-packages"}
                    style={{ textDecoration: "none" }}
                  >
                    <Col col="3" md="12">
                      <Button style={{}} outline color="info">
                        Book Now
                      </Button>
                    </Col>
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col sm="4">
              <div className="tour-gallery">
                <a>
                  {props.currentPackage !== true &&
                    props.currentPackage.Images.slice(1, 5).map(
                      (img, index) => {
                        return (
                          <img
                            key={index}
                            src={`http://localhost:4000/${
                              img.split("uploads")[1]
                            }`}
                            alt="Image-Packages"
                          />
                        );
                      }
                    )}
                </a>
                {/* <a href={imgCard2}></a>
                <a href={imgCard3}>
                  <img src={imgCard3} alt="" />
                </a>
                <a href={imgCard4}>
                  <img src={imgCard4} alt="" />
                </a> */}
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section className="reviews">
        <Container>
          <section className="tour-msg text-center">
            <h1>Reviews and Suggestions</h1>
            <p>We're glad to hear something from you.</p>
            <form action="">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                  />
                </Col>
              </Row>

              <Button
                outline
                color="secondary"
                onClick={_addReview}
                className="float-right"
              >
                Submit
              </Button>
            </form>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default PackagesDetailPage;
