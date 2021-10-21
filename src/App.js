import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>

  </>
  );
}

export default App;
