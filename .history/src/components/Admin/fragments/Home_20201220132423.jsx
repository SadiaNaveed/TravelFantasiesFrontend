import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
});

class HomeFragment extends Component {
  constructor() {
    super();
    this.state = {
      render: "",
      open: false,
      home: true,
    };
    // this.handleHotelClick = this.handleHotelClick.bind(this);
  }

  render() {
    return (
      <div style={{ marginLeft: "250px", marginTop: "10px" }}>
        <h1>Hello Dashboard</h1>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-primary">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-secondary">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-success">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-info">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-warning">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card card-accent-danger">
              <header class="card-header">Card with accent</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="text-white card bg-primary">
              <header class="card-header">Card title</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="text-white card bg-success">
              <header class="card-header">Card title</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="text-white card bg-info">
              <header class="card-header">Card title</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="text-white card bg-warning">
              <header class="card-header">Card title</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card bg-gradient-secondary">
              <header class="card-header">Card title - gradient</header>
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="fade show">
              <div class="card">
                <header class="card-header">
                  Card actions
                  <div class="card-header-actions">
                    <a href="#" class="card-header-action">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="c-icon"
                        role="img"
                      >
                        <path
                          fill="var(--ci-primary-color, currentColor)"
                          d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"
                          class="ci-primary"
                        ></path>
                        <path
                          fill="var(--ci-primary-color, currentColor)"
                          d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"
                          class="ci-primary"
                        ></path>
                      </svg>
                    </a>
                    <a href="#" class="card-header-action">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="c-icon"
                        role="img"
                      >
                        <path
                          fill="var(--ci-primary-color, currentColor)"
                          d="M256.072,424l-11.421-11.313-85.808-85.809.053-.054L16,183.928l97.122-97.122,142.9,142.9,142.9-142.9,97.122,97.122L353.243,326.722l-11.361,11.469Zm-.107-45.254.054.053,51.835-51.835L319.2,315.511,450.783,183.928,398.915,132.06l-142.9,142.9-142.9-142.9L61.254,183.928l142.9,142.9-.053.054Z"
                          class="ci-primary"
                        ></path>
                      </svg>
                    </a>
                    <a href="#" class="card-header-action">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="c-icon"
                        role="img"
                      >
                        <polygon
                          fill="var(--ci-primary-color, currentColor)"
                          points="348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302"
                          class="ci-primary"
                        ></polygon>
                        <path
                          fill="var(--ci-primary-color, currentColor)"
                          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z"
                          class="ci-primary"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </header>
                <div class="collapse show">
                  <div class="card-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export default withStyles(useStyles)(HomeFragment)
export default HomeFragment;
