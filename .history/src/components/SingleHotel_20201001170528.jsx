import React from "react";
import { Grid, Button } from "@material-ui/core";
import hotelService from "./../services/HotelService";
import { withRouter } from "react-router";
//import userService from "../../services/UserService";
const SingleProduct = (props) => {
  const { hotel, history } = props;
  console.log(props);

  return (
    <Grid item xs={4}>
      <h2>
        {hotel.Hotel_Name}

        {/* {userService.isAdmin() && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                productService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )} */}
      </h2>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.9636439128853!2d74.3361773144838!3d31.552612352707644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c8606da7e9%3A0xd70a28b88f7720d7!2sPearl%20Continental%20Hotel%20Lahore!5e0!3m2!1sen!2s!4v1601552052903!5m2!1sen!2s"
        width="130"
        height="150"
        frameborder="0"
        style={{ border: "0" }}
        allowfullscreen=""
        // aria-hidden="false"
        tabindex="0"
      ></iframe> */}
      <img src={hotels.Images} alt="hotel" />

      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
