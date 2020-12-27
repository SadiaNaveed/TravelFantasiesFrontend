import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import AppBarComponenet from "./fragments/AppBar";
import HomeFragment from "./fragments/Home";
import SideBarComponent from "./fragments/SidebarComponent";
import Navbar from "./fragments/Navbar";

export default function ClippedDrawer() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
}
//   <div>
//     {/* <CssBaseline /> */}
//     {/* <AppBarComponenet /> */}
//     {/* {home ? <HomeFragment /> : null}   */}
//     <SideBarComponent />
//   </div>
// );
// }
