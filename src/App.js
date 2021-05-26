import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Login from "./components/Login.jsx";
import Profiles from "./components/Profiles.jsx";
import NewResident from "./components/NewResident.jsx";
import OPP from "./components/OnePageProfile.jsx";
import OPPBuilder from "./components/OPPBuilder.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/newresident">
            <NewResident />
          </Route>
          <Route path="/profiles">
            <Profiles />
          </Route>
          <Route path="/oppbuilder">
            <OPPBuilder />
          </Route>
          <Route path="/opp-page">
            <OPP />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
