import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import AppBarComponenet from "./fragments/AppBar";
import HomeFragment from "./fragments/Home";
import SideBarComponent from "./fragments/SidebarComponent";

export default function ClippedDrawer() {
  return (
    <div>
      {/* <CssBaseline /> */}
      {/* <AppBarComponenet /> */}
      {/* {home ? <HomeFragment /> : null}   */}
      <SideBarComponent />
      <div class="mb-4 col-12 col-md-6">
        <div class="card">
          <header class="card-header">
            Index indentifiers
            <div class="card-header-actions">
              <a
                href="https://coreui.io/react/docs/components/CTabs"
                class="card-header-action"
                rel="noreferrer noopener"
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </header>
          <div class="card-body">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="active nav-link">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Messages
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade">
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit.
              </div>
              <div class="tab-pane active fade show">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit.
              </div>
              <div class="tab-pane fade">
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
