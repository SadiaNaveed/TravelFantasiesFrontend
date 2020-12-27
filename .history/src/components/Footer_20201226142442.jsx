import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { Container} from 'react-bootstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";

//const drawerWidth = 1510;

const useStyles = makeStyles((theme) => ({
  customizeToolbar: {
    minHeight: 50,
    backgroundColor: "white",
    textAlign: "center",
  },

  link: {
    color: "#339ba5",
    //textAlign:"center",
    //paddingCenter: "4rem",
    fontFamily: "Times New Roman",
    //  fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
    justifyContent: "center",
    alignItems: "center",
  },
  /*footerBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginCenter: drawerWidth,
      },
    },*/
}));

const Footer = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return location.pathname === "/admin-dashboard" ? (
    <AppBarComponenet />
  ) : (
    <div>
      <Navbar
        color="light"
        light
        expand="sm"
        style={{ padding: 50, height: 100, width: 1510 }}
      >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{ textAlign: "center" }}>
              <NavLink href="/Blog">Explore Our Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-us">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us">About Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Footer;

{
  /* return (
    <Fragment>
    <Container fluid>
        
    </Container>
    <Navbar className="blue"style={{padding:50, height:100 , width: 1510, backgroundColor: "#999999" }}> 
    
        <Nav className="m-auto" >
            <Nav.Link to="/Blog" className="nav-link">
                Blog
            </Nav.Link>
            <Nav.Link to="/terms" className="nav-link">
                Contact_Us
            </Nav.Link>
            <Nav.Link to="/policy" className="nav-link">
                About_Us
            </Nav.Link>
        </Nav>
    </Navbar>
    </Fragment>
  );
*/
}
