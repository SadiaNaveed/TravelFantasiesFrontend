import React from "react";
import Badshahi from "../f480089fafa42cc53b36765ea425599d.jpg";
import Girl from "../smiling-girl-avatar_102172-32.jpg";
import {
  Grid,
  Button,
  Typography,
  Box,
  makeStyles,
  Card,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  bigCircle: {
    height: "100px",
    width: "100px",
    borderRadius: "70px",
    //  backgroundColor: "blue",
    //  position: "relative",
    marginLeft: "70px",
    backgroundColor: "#33abb8",
    position: "absolute",
  },
  smallCircle: {
    height: "70px",
    width: "70px",
    borderRadius: "50px",
    //  backgroundColor: "blue",
    // position: "relative",
    marginLeft: "390px",
    backgroundColor: "#33abb8",
    position: "absolute",
  },
}));

const Aboutus = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "white" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 50,
            height: "400px",
            //backgroundColor: "#339ba5",
            backgroundImage: "linear-gradient(#339ba5, white)",

            borderBottomRightRadius: "500px",
            // borderTopLeftRadius: "700px",
            borderBottomLeftRadius: "500px",
            // borderTopRightRadius: "300px",
          }}
        >
          <h1 style={{ marginTop: "100px" }}> About Us</h1>
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "white",
            textAlign: "center",
            height: "400px",
            color: "#339ba5",
            marginTop: "30px",
          }}
        >
          <div
            className={classes.bigCircle}
            style={{ marginLeft: "10px" }}
          ></div>

          <div
            className={classes.smallCircle}
            style={{ marginLeft: "90px", marginTop: "80px" }}
          ></div>

          <h1 style={{ fontSize: 50 }}>Our History</h1>
          <p
            style={{
              fontSize: 30,
              position: "absolute",
              left: "14%",
              right: "10%",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            ea omnis consequuntur ipsam! Quam dolorum ullam, sed saepe
            voluptatibus ut earum quod assumenda reprehenderit beatae adipisci
            porro, in asperiores quaerat! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem quam numquam nulla quaerat
            voluptates voluptatibus excepturi similique molestias itaque
            nesciunt temporibus vitae deserunt, optio, minima reiciendis,
            dolores hic qui magni. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Officiis exercitationem soluta laboriosam et,
            laudantium rem id eos! Dolores blanditiis nobis molestias voluptatum
            laborum aliquam minus, alias sint ut illo. Sed?
          </p>
        </Grid>
      </Grid>
      <Grid container>
        <div
          className={classes.bigCircle}
          style={{ right: "0px", top: "1000px" }}
        ></div>
        <div className={classes.smallCircle} style={{ right: "80px" }}></div>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "white",
            textAlign: "center",
            height: "200px",
            color: "#339ba5",
            marginTop: "170px",
          }}
        >
          <h1 style={{ fontSize: 50 }}>Our Mission</h1>
        </Grid>

        <Grid item xs={6} style={{ paddingLeft: "7%" }}>
          <img
            src={Badshahi}
            width="500px"
            height="500px"
            alt="cover"
            style={{ borderRadius: "300px" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{ marginLeft: "-10px", fontSize: 30, color: "#339ba5" }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            perspiciatis numquam minus aliquid! Repellat quod voluptatem eos
            harum eligendi illo at repudiandae! Vero ipsa dolore, laborum
            consequatur et id ad? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum cumque eius, similique neque quo,
            perspiciatis repudiandae exercitationem minus reprehenderit quis
            fugit itaque officiis corrupti consectetur optio et, animi est
            praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Vitae harum maiores consequuntur eum dolor nihil saepe
            voluptate ab fuga modi dolore molestias animi sequi et quaerat
            voluptatibus, quasi soluta sunt?
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#339ba5",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            textAlign: "center",
            //   height: "200px",
            color: "white",
            marginTop: "30px",
          }}
        >
          <h1 style={{ fontSize: 50 }}>Meet Our Team</h1>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: "#339ba5",
            marginLeft: "200px",
            padding: "2px",
          }}
        >
          <Card style={{ width: "18rem", margin: "30px" }}>
            <img
              src={Girl}
              width="150px"
              height="150px"
              alt="cover"
              style={{ borderRadius: "300px", marginLeft: "30%" }}
            />
            <Card body="true">
              <Card title="true">{"Rimsha Tehreem"}</Card>

              <Card text="true">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                perspiciatis numquam minus aliquid! Repellat quod voluptatem eos
                harum eligendi illo at repudiandae! Vero ipsa dolore, laborum
                consequatur et id ad? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum cumque eius, similique neque quo,
                perspiciatis repudiandae exercitationem minus reprehenderit quis
                fugit itaque officiis corrupti consectetur optio et, animi est
                praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Vitae harum maiores consequuntur eum dolor nihil saepe
                voluptate ab fuga modi dolore molestias animi sequi et quaerat
                voluptatibus, quasi soluta sunt?
              </Card>
            </Card>
          </Card>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: "#339ba5",
            marginLeft: "4px",
            padding: "2px",
          }}
        >
          <Card style={{ width: "18rem", margin: "30px" }}>
            <img
              src={Girl}
              width="150px"
              height="150px"
              alt="cover"
              style={{ borderRadius: "300px", marginLeft: "30%" }}
            />
            <Card body="true">
              <Card title="true">{"Sadia Naveed"}</Card>

              <Card text="true">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                perspiciatis numquam minus aliquid! Repellat quod voluptatem eos
                harum eligendi illo at repudiandae! Vero ipsa dolore
              </Card>
            </Card>
          </Card>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: "#339ba5",
            marginLeft: "4px",
            padding: "2px",
          }}
        >
          {" "}
          <Card style={{ width: "18rem", margin: "30px" }}>
            <img
              src={Girl}
              width="150px"
              height="150px"
              alt="cover"
              style={{ borderRadius: "300px", marginLeft: "30%" }}
            />
            <Card body="true">
              <Card title="true">{"Asma Bint e Umar"}</Card>

              <Card text="true">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                perspiciatis numquam minus aliquid! Repellat quod voluptatem eos
                harum eligendi illo at repudiandae! Vero ipsa dolore
              </Card>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Aboutus;
