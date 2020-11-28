import React from "react";
import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardText,
  Row,
  Col,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
//import cross from '../../';
//import axios from 'axios'
function WhatsNew() {
  //useEffect(()=>{
  // axios.get("http://localhost:3000/api/tours")
  // .then((response)=>{
  //  console.log(response.data)
  //}).catch((err)=>{
  //  console.log(err)
  //})

  //},[])

  return (
    <div>
      <ScrollAnimation animateIn="animate__lightSpeedInRight">
        <div
          style={{
            fontSize: "50px",
            marginTop: 20,
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Recent Tours
        </div>
      </ScrollAnimation>

      <Row
        style={{
          alignSelf: "center",
          justifyContent: "space-around",
          marginRight: 30,
          marginLeft: 30,
        }}
      >
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Karachi Gorakh Hill Station</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Explore the City of Lights
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../pic/hillstation.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  Gorakh Hill Station offers a chance to camp out with your
                  loved ones under a starry sky where you can enjoy the night
                  with a bonfire, BBQ, and storytelling.
                </CardText>
                <CardLink>
                  <Link to={"/book-tour"} style={{ textDecoration: "none" }}>
                    Book Now
                  </Link>
                </CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Sheesh Mahal</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Palace of Mirrors
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../pic/sheeshmahal.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  The Sheesh Mahal is located in Shah Burj block in
                  northern-western corner of Lahore Fort. It was constructed in
                  the era of Emperor Shah Jahan in 1631–32.
                </CardText>
                <CardLink href="#">Book Now</CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOutRight"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Margala Hills</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Mountains are calling you!!
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../Asserts/34.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  The Margalla Hills is part of the Himalayan foothills located
                  within the Margalla Hills National Park, north of Islamabad,
                  Pakistan. The Margalla range has an area of 12,605 hectares
                </CardText>
                <CardLink href="#">Book Now</CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>
      <ScrollAnimation animateIn="bounceInRight">
        <div
          class="animate__animated animate__bounce"
          style={{
            fontSize: "50px",
            padding: "30px",
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Tours on The Way
        </div>
      </ScrollAnimation>

      <Row
        style={{
          alignSelf: "center",
          justifyContent: "space-around",
          marginRight: 30,
          marginLeft: 30,
        }}
      >
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Food Street Fort Road</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Get the Taste of Happiness
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../pic/foodstreet.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  Fort Road Food Street is a food street located between Fort
                  Road and Roshnai Gate of the Walled City in Lahore, Punjab,
                  Pakistan.
                </CardText>
                <CardLink href="#">Book Now</CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Rawal Lake</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Dive in the Lake of Pleasure
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../Asserts/rawal_lake2.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  Rawal Lake in Pakistan is an artificial reservoir that
                  provides the water needs for the cities of Rawalpindi and
                  Islamabad.
                </CardText>
                <CardLink href="#">Book Now</CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOutRight"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Jinnah Park Rawalpindi</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Let us have a picnic here!
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../Asserts/18-Jinnah-Park-Rawalpindi-1-Photo-Credits-Monarchy (1).jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText style={{ marginTop: 10 }}>
                  Jinnah Park is an amusement and public park located on Airport
                  Road in the high-security Chaklala Cantonment suburb of
                  Rawalpindi.
                </CardText>
                <CardLink href="#">Book Now</CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>
      <ScrollAnimation animateIn="bounceInRight">
        <div
          class="animate__animated animate__bounce"
          style={{
            fontSize: "50px",
            padding: "30px",
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Top Rated Tours
        </div>
      </ScrollAnimation>

      <Row
        style={{
          alignSelf: "center",
          justifyContent: "space-around",
          marginRight: 30,
          marginLeft: 30,
        }}
      >
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Swat District</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Explore the Natural Beauty
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../Asserts/Matilton-Village-Swat.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText style={{ marginTop: -10 }}>
                  Swat District is a district in Malakand Division of Khyber
                  Pakhtunkhwa province in Pakistan. Centred upon the upper
                  portions of the Swat River, Swat was a major centre of early
                  Buddhist thought as part of the Gandhara kingdom, and today is
                  littered with ruins from that era. It is on of the most green
                  valleys of the Northern Pakistan and is well connected to the
                  rest of Pakistan.
                </CardText>
                <CardLink href="#">Book Now</CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Phander Lake</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Dive in the Lake of Pleasure
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../Asserts/phander-lake-at-sunset.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  Phander Lake is situated in the Phander Village, in
                  Koh-i-Ghizer, Ghizer District, the westernmost part of the
                  Gilgit–Baltistan region and northernmost territory of
                  Pakistan. This lake is an important source of fresh water.
                </CardText>
                <CardLink href="#">Book Now</CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col sm="4">
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOutRight"
          >
            <Card>
              <CardBody>
                <CardTitle tag="h5">Shah Jahan Masjid</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  See the world Class Art by Mughals
                </CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src={require("../../Asserts/ShahJahanMasjid.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                <CardText style={{ marginTop: 10 }}>
                  The Shah Jahan Masjid, also known as the Jamia Masjid of
                  Thatta, is a 17th century building that serves as the central
                  mosque for the city of Thatta, in the Pakistani province of
                  Sindh. The mosque was built during the reign of Mughal emperor
                  Shah Jahan.
                </CardText>
                <CardLink href="#">Book Now</CardLink>
                <CardLink href="#">Learn More</CardLink>
              </CardBody>
            </Card>
          </ScrollAnimation>
        </Col>
      </Row>

      {/* <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={5} style={{ padding: "50px" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/hillstation.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Karachi Gorakh Hill Station
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Gorakh Hill Station offers a chance to camp out with your
                      loved ones under a starry sky where you can enjoy the
                      night with a bonfire, BBQ, and storytelling.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/sheeshmahal.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Sheesh Mahal - Palace of Mirrors
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      The Sheesh Mahal is located within the Shah Burj block in
                      northern-western corner of Lahore Fort. It was constructed
                      under the reign of Mughal Emperor Shah Jahan in 1631–32.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/margalahills.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Margala Hills
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      The Margalla Hills is a hill range which is part of the
                      Himalayan foothills located within the Margalla Hills
                      National Park, north of Islamabad, Pakistan. The Margalla
                      range has an area of 12,605 hectares
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div> */}
      {/* <div style={{ fontSize: "30px", padding: "30px", fontWeight: "bold" }}>
        Upcoming Tours
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={5} style={{ padding: "50px" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/foodstreet.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Food Street Fort Road
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Fort Road Food Street is a food street located between
                      Fort Road and Roshnai Gate of the Walled City in Lahore,
                      Punjab, Pakistan.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/Rawallake.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Rawal Lake
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Rawal Lake in Pakistan is an artificial reservoir that
                      provides the water needs for the cities of Rawalpindi and
                      Islamabad.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/sawat.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Jinnah Park Rawalpindi
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Jinnah Park is an amusement and public park located on
                      Airport Road in the high-security Chaklala Cantonment
                      suburb of Rawalpindi, Pakistan.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div> */}
      {/* <div style={{ fontSize: "30px", padding: "30px", fontWeight: "bold" }}>
        Popular Tours
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={5} style={{ padding: "50px" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/sawat2.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Swat District
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Swat District is a district in Malakand Division of Khyber
                      Pakhtunkhwa province in Pakistan. Centred upon the upper
                      portions of the Swat River, Swat was a major centre of
                      early Buddhist thought as part of the Gandhara kingdom,
                      and today is littered with ruins from that era.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/phanderlake.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Phander Lake
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Phander Lake is situated in the Phander Village, in
                      Koh-i-Ghizer, Ghizer District, the westernmost part of the
                      Gilgit–Baltistan region and northernmost territory of
                      Pakistan. This lake is an important source of fresh water.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{ maxWidth: "345" }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={require("../../pic/shahjahan1.jpg")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Shah Jahan Mosque
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      The Shah Jahan Mosque, also known as the Jamia Masjid of
                      Thatta, is a 17th century building that serves as the
                      central mosque for the city of Thatta, in the Pakistani
                      province of Sindh. The mosque was built during the reign
                      of Mughal emperor Shah Jahan.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book Now
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></div> */}
    </div>
  );
}

export default WhatsNew;
