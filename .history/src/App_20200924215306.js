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
import Login from "./components/Login";
import Blog from "./components/Blog";
//import Signup from "./components/Signup";
import Product from "./components/products";
import Hotels from "./components/Hotels";
import Aboutus from "./components/Aboutus";
import Itinerary from "./components/Itinerary";
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

  return (
    <Router>
      <div>
        {/* <h1 style = {{backgroundColor:"aqua"}}> Products Details </h1>  */}
        <TopMenu />
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={Aboutus} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/login" component={Login} />
          <Route path="/Blog" exact component={Blog} />
          {/* <Route path="/sign-up" exact component={Signup} /> */}
          <Route path="/itinerary/:page?" exact component={Itinerary} />
          <Route path="/" exact component={LandingPage} />
          <Redirect to="not-found" />
        </Switch>
        <Footer />
        {/* <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <Product title="Audi"  price="900" onAdToCart = {handlAddToCartClick} count={count}/>
      <Product title="Suzuki" price="800" onAdToCart = {handlAddToCartClick} count={count}/>
      <Product title="Mehran" price="200" onAdToCart = {handlAddToCartClick} count={count}/> */}
      </div>
    </Router>
  );
}

export default App;
