import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import AppBarComponenet from "./fragments/AppBar";
import HomeFragment from "./fragments/Home";
import SideBarComponent from "./fragments/SidebarComponent";

export default function ClippedDrawer() {
  return (
    <div style={{ marginTop: "1000px" }}>
      {/* <CssBaseline /> */}
      {/* <AppBarComponenet /> */}
      {/* {home ? <HomeFragment /> : null}   */}
      <SideBarComponent />
    </div>
  );
}
