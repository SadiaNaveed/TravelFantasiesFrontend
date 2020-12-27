import React from "react";
//import Counter from './components/Counter';
// with import
//import logo from "./neelum_valley_ajk.jpg"; // with import
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/Contactus";
import NotFound from "./components/NotFound";
//import Login from "./components/Login";
import Blog from "./components/Blogs/Blog";
//import Signup from "./components/Signup";
import Product from "./components/products";
import Hotels from "./components/Hotels/Hotels";
import addHotel from "./components/Admin/fragments/AddHotel";
import Aboutus from "./components/Aboutus";
import Itinerary from "./components/Itinerary";
import Compare from "./components/Hotels/compare";
import Dashboard from "./components/Admin/Dashboard";
import UserDashboard from "./components/User/Dashboard";
import GuideDashboard from "./components/Guide/Dashboard";
import HotelBooking from "./components/Hotels/HotelBooking";
import HotelDetail from "./components/Hotels/HotelDetail";
import HotelView from "./components/Admin/fragments/HotelView";
import AddRoom from "./components/Admin/fragments/AddRoom";
import AllRooms from "./components/Admin/fragments/AllRooms";
import placeDetail from "./components/Places/PlacesToVisit";
import RoomView from "./components/Admin/fragments/RoomView";
import RoomDetail from "./components/Hotels/RoomDetail";
import Tours from "./components/Tour/Tours";
import Become_a_host from "./components/Host/Become_a_host";
// import BecomeGuide from "./components/Guide-page/BecomeGuide";

// import Become_a_host from "./components/Host/Become_a_host";
import BookTour from "./components/Bookings/BookTour";
import Packages from "./components/Packages/Packages";
import TourDetailPage from "./components/TourDetailPage/TourDetailPage";
import Guide from "./components/Guide-page/Guide";
import Signup from "./components/auth/signupComponent";
import Login from "./components/auth/loginComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MapView from "./components/Hotels/MapView";
import Payment from "./components/Hotels/Payment";
import ProtectedRoute from "./components/ProctedRoute";
import userService from "./services/UserService";
import SidebarComponent from "./components/Admin/fragments/SidebarComponent";
// const handlAddToCartClick = (title) => {
//   alert("Add to cart clicked for " +title);
// };

function App() {
  // const[count,setCount] = React.useState(5);
  // const handleIncrement = () => {
  //     setCount(count + 1);
  // };
  // const handleDecrement = () => {
  //     setCount(count - 1);
  // };
  const [showTopMenu, setTopMenu] = React.useState(true);

  return (
    <Router>
      <div>
        {/* <h1 style = {{backgroundColor:"aqua"}}> Products Details </h1>  */}
        <ToastContainer />
        <TopMenu />
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={Aboutus} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/hotel/add" component={addHotel} />
          <Route path="/HotelDetail" component={HotelDetail} />
          <Route path="/HotelMapView" component={MapView} />
          <Route path="/HotelBooking" component={HotelBooking} />
          <Route path="/hotels/:page/:perPage" component={Hotels} />
          <Route path="/login" component={Login} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/PlacesToVisit" component={placeDetail} />
          <Route path="/hotel/compare" component={Compare} />
          <Route path="/AddRoom" component={AddRoom} />
          <Route path="/RoomsView" component={AllRooms} />
          <Route path="/SingleRoomView" component={RoomView} />
          <Route path="/RoomDetail" component={RoomDetail} />
          <Route path="/HotelView" component={HotelView} />
          <Route path="/admin-dashboard" component={Dashboard} />
          <Route path="/user-dashboard" component={UserDashboard} />

          <Route path="/Compare" component={Compare} />
          <Route path="/guide-dashboard" component={GuideDashboard} />
          <Route path="/HotelBooking/:id" component={HotelBooking} />
          <Route path="/HotelPayment" component={Payment} />
          {/* <Route path="/sign-up" exact component={Signup} /> */}
          <Route path="/itinerary/:page/:perPage" component={Itinerary} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/Tours" component={Tours} />
          <ProtectedRoute
            path="/Become_a_host"
            login={userService.getLoggedInUser() != null ? true : false}
            component={Become_a_host}
          />
          <ProtectedRoute
            path="/BecomeGuide"
            login={userService.getLoggedInUser() != null ? true : false}
            component={BecomeGuide}
          />
          {/* <Route path="/Become_a_host" component={Become_a_host} /> */}
          <Route path="/book-tour" component={BookTour} />
          <Route path="/travel-packages" component={Packages} />
          <Route path="/TourDetailPage" component={TourDetailPage} />
          <Route path="/Guide" component={Guide} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/admin-dashboard" component={Dashboard} />

          <Route path="/user-dashboard" component={UserDashboard} />

          <Redirect to="not-found" />
        </Switch>
        <Footer />
        {/*
       
         <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <Product title="Audi"  price="900" onAdToCart = {handlAddToCartClick} count={count}/>
      <Product title="Suzuki" price="800" onAdToCart = {handlAddToCartClick} count={count}/>
      <Product title="Mehran" price="200" onAdToCart = {handlAddToCartClick} count={count}/> */}
      </div>
    </Router>
  );
}

export default App;
