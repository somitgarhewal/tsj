import React from "react";

import { Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import AboutUs from "./components/aboutus";
import ChooseCar from "./components/chooseCar";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import TourPackages from "./components/tourPackages";
import PhoneComponent from "./components/miscellaneous/phoneComponent";
import TaxiServices from "./components/taxiServices";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about_us' component={AboutUs} />
        <Route path='/choose_car' component={ChooseCar} />
        <Route path='/tour_packages' component={TourPackages} />
        <Route path='/contact' component={Contact} />
        <Route path='/taxi_services' component={TaxiServices} />
      </Switch>
      <PhoneComponent />
      <Footer />
    </>
  );
}

export default App;
