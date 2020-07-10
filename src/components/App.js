import React from "react";
import "../App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Protest from "./Protest";
import Read from "./Read";
import Watch from "./Watch";
import Listen from "./Listen";
import Contact from "./Contact";
import Donate from "./Donate";
import Resources from "./Resources";
import Petitions from "./Petitions";
import BlackHistory from "./BlackHistory";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/protest">
            <NavBar />
            <Protest />
          </Route>
          <Route path="/read">
            <NavBar />
            <Read />
          </Route>
          <Route path="/watch">
            <NavBar />
            <Watch />
          </Route>
          <Route path="/listen">
            <NavBar />
            <Listen />
          </Route>
          <Route path="/contact">
            <NavBar />
            <Contact />
          </Route>
          <Route path="/donate">
            <NavBar />
            <Donate />
          </Route>
          <Route path="/petitions">
            <NavBar />
            <Petitions />
          </Route>
          <Route path="/resources">
            <NavBar />
            <Resources />
          </Route>
          <Route path="/black_history">
            <NavBar />
            <BlackHistory />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
