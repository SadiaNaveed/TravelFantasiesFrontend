import React from "react"
const Itinerary = (props) => {
  //   //  const classes = useStyles();
  const [places, setPlaces] = React.useState([]);
  const page = props.match.params.page ? props.match.params.page : 1;
  //   //const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const getData = () => {
    placeService
      .getPlace(page, perPage)
      .then((data) => {
        setPlaces(data);
        // setTotal(data.total);
        //setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Products Component");
