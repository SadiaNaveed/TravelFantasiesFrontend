import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Login from "./Login";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Login />
    </div>
  );
}
