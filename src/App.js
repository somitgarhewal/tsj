import React from "react";

import { Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <Footer />

  </>
  );
}

export default App;
