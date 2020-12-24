import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  handleHotelClick() {
    this.setState({ openHotel: !this.state.openHotel });
  }
  handleTourClick() {
    this.setState({ openTour: !this.state.openTour });
  }
  handlePackageClick() {
    this.setState({ openPackage: !this.state.openPackage });
  }
  handleBookingClick() {
    this.setState({ openBooking: !this.state.openBooking });
  }
  handleUserClick() {
    this.setState({ openUser: !this.state.openUser });
  }
  handleBlogClick() {
    this.setState({ openBlog: !this.state.openBlog });
  }
  handlePlacesClick() {
    this.setState({ openPlaces: !this.state.openPlaces });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "addHotel":
        return <AddHotel />;
      case "AllHotel":
        return <AllHotel />;
      case "Home":
        return <HomeFragment />;
      case "AllHotelCategory":
        return <AllHotelCategory />;
      case "AddHotelCategory":
        return <AddHotelCategory />;
      case "AddRoomCategory":
        return <AddRoomCategory />;
      case "AllRoomCategory":
        return <AllRoomCategory />;
      case "AllRooms":
        return <AllHotelsAllRooms />;
      case "AllPlaces":
        return <AllPlaces />;
      case "addPlace":
        return <AddPlace />;
      case "AddBlog":
        return <AddBlog />;
      case "AllBlogs":
        return <AllBlogs />;
      case "AllBlogCategory":
        return <AllBlogCategory />;
      case "AddBlogCategory":
        return <AddBlogCategory />;
      default:
        return <HomeFragment />;
    }
  }

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
