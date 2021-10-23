import React from "react";

import { Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import AboutUs from "./components/aboutus";
import CarRental from "./components/carRental";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import TourPackages from "./components/tourPackages";
import PhoneComponent from "./components/miscellaneous/phoneComponent";

function App() {
  return (
    <>
      <Header />
      <PhoneComponent />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about_us' component={AboutUs} />
        <Route path='/car_rental' component={CarRental} />
        <Route path='/tour_packages' component={TourPackages} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
